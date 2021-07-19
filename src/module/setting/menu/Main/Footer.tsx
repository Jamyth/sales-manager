import React from 'react';
import { Footer as LayoutFooter } from 'component/Footer';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { MerchantConfig } from 'merchant-conf/current/MerchantConfig';
import { useSettingMenuAction } from '../index';

export const Footer = React.memo(() => {
    const { openModal } = useSettingMenuAction();
    const color = useColorModeValue('white', 'gray.800');
    return (
        <LayoutFooter h="60px">
            <Button
                onClick={() => openModal()}
                isFullWidth
                backgroundColor={MerchantConfig.theme}
                color={color}
                fontWeight="500"
            >
                新增產品
            </Button>
        </LayoutFooter>
    );
});
