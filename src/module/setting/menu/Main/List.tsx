import { Badge, Button, ButtonGroup, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useSettingMenuState } from '../hooks';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useSettingMenuAction } from '../index';

export const List = React.memo(() => {
    const menu = useSettingMenuState((state) => state.menu);
    const { openModal, deleteProduct } = useSettingMenuAction();
    const backgroundColor = useColorModeValue('white', 'gray.700');

    if (!menu?.length) {
        return (
            <Flex flex={1} flexDir="column" justifyContent="center" alignItems="center">
                <span>暫時未有產品</span>
            </Flex>
        );
    }

    return (
        <Flex flexDirection="column" borderTopWidth="1px" borderBottomWidth="1px" backgroundColor={backgroundColor}>
            {menu &&
                menu.map((product) => {
                    return (
                        <Flex
                            key={product.id}
                            justifyContent="space-between"
                            alignItems="center"
                            py={3}
                            px={4}
                            css={{
                                '&:not(:last-of-type)': {
                                    borderBottomWidth: '1px',
                                },
                            }}
                        >
                            <Flex alignItems="center">
                                <Heading fontSize="lg" fontWeight={500}>
                                    {product.name}
                                </Heading>
                                <Badge ml={2} rounded="md" variant="solid" colorScheme="green" fontSize="lg" mr={2}>
                                    ${product.price}
                                </Badge>
                            </Flex>
                            <ButtonGroup>
                                <Button
                                    onClick={() => openModal(product)}
                                    colorScheme="yellow"
                                    size="sm"
                                    fontSize="md"
                                    h={7}
                                >
                                    <FaPen />
                                </Button>
                                <Button
                                    onClick={() => deleteProduct(product.id)}
                                    colorScheme="red"
                                    size="sm"
                                    fontSize="md"
                                    h={7}
                                >
                                    <FaTrash />
                                </Button>
                            </ButtonGroup>
                        </Flex>
                    );
                })}
        </Flex>
    );
});
