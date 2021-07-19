import React from 'react';
import { Drawer } from 'component/Drawer';
import { useSettingMenuState } from '../hooks';
import { useSettingMenuAction } from '../index';
import { Button, Flex, FormControl, FormLabel, useToast, VStack, useColorModeValue } from '@chakra-ui/react';
import { MerchantConfig } from 'merchant-conf/current/MerchantConfig';
import { NullableInput } from 'component/NullableInput';
import { NullableNumberInput } from 'component/NullableNumberInput';

export const EditingModal = React.memo(() => {
    const openedItem = useSettingMenuState((state) => state.openedItem);
    const { closeModal, updateOpenedItem, createOrUpdateProduct } = useSettingMenuAction();
    const title = (openedItem?.id === 'new' ? '新增' : '修改') + '產品';
    const toast = useToast();
    const color = useColorModeValue('white', 'gray.800');

    const onSubmit = () => {
        if (!openedItem?.editingData.name || !openedItem?.editingData.price === null) {
            toast({
                title: '錯誤',
                description: '資料不全',
                position: 'top',
                status: 'error',
                duration: 3000,
            });
            return;
        }
        createOrUpdateProduct();
    };

    return (
        <Drawer title={title} isOpen={openedItem !== null} onClose={closeModal}>
            {openedItem && (
                <VStack spacing={8} pb={4}>
                    <FormControl>
                        <FormLabel>產品名稱</FormLabel>
                        <NullableInput
                            value={openedItem.editingData.name}
                            onChange={(name) => updateOpenedItem({ name })}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>價錢</FormLabel>
                        <NullableNumberInput
                            value={openedItem.editingData.price}
                            onChange={(price) => updateOpenedItem({ price })}
                        />
                    </FormControl>
                    <Flex w="100%" flexDirection="column">
                        <Button
                            onClick={onSubmit}
                            isFullWidth
                            backgroundColor={MerchantConfig.theme}
                            color={color}
                            fontWeight="normal"
                            fontSize="lg"
                            mb={2}
                        >
                            {openedItem.id === 'new' ? '新增' : '修改'}
                        </Button>
                        <Button
                            onClick={closeModal}
                            isFullWidth
                            color={color}
                            backgroundColor="red.400"
                            fontWeight="normal"
                            fontSize="lg"
                        >
                            關閉
                        </Button>
                    </Flex>
                </VStack>
            )}
        </Drawer>
    );
});
