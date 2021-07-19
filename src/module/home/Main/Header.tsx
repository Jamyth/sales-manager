import React from 'react';
import { Header as LayoutHeader } from 'component/Header';
import { MerchantConfig } from 'merchant-conf/current/MerchantConfig';
import { Heading } from '@chakra-ui/layout';
import { AiFillSetting } from 'react-icons/ai';
import { useHistory } from 'coil-react';

export const Header = React.memo(() => {
    const history = useHistory();
    return (
        <LayoutHeader rightNode={<AiFillSetting />} onRightNodeClick={() => history.push('/setting')}>
            <Heading fontSize="lg">{MerchantConfig.name}</Heading>
        </LayoutHeader>
    );
});
