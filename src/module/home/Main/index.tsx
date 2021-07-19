import { Page } from 'component/Page';
import React from 'react';
import { useHomeState } from '../hooks';
import { ObjectUtil } from 'jamyth-web-util';
import { Item } from './Item';
import { useHomeAction } from 'module/home';
import { useHistory } from 'coil-react';
import { Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { MerchantConfig } from 'merchant-conf/current/MerchantConfig';
import { Header } from './Header';
import { Footer } from './Footer';

export const Main = React.memo(() => {
    const record = useHomeState((state) => state.record);
    const { updateQuantity } = useHomeAction();
    const hasItem = Object.keys(record || {}).length !== 0;
    const history = useHistory();

    const toSetting = () => {
        history.push('/setting/menu');
    };

    if (!record) {
        return <Page>{false}</Page>;
    }

    return (
        <Page p={4} header={<Header />} footer={<Footer />}>
            <React.Fragment>
                {!hasItem && (
                    <Flex flex={1} flexDir="column" justifyContent="center" alignItems="center">
                        <span>暫時未有產品</span>
                        <span>
                            不如{' '}
                            <Button
                                color={MerchantConfig.theme}
                                textDecor="underline"
                                variant="link"
                                onClick={toSetting}
                            >
                                加翻幾件
                            </Button>{' '}
                            ？
                        </span>
                    </Flex>
                )}
                {ObjectUtil.toArray(record, (_, product) => (
                    <Item key={_} {...product} value={product.quantity} onChange={updateQuantity} />
                ))}
            </React.Fragment>
        </Page>
    );
});
