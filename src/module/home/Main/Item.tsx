import React from 'react';
import { Badge, Flex, Text } from '@chakra-ui/react';
import { NumberButton } from 'component/NumberButton';
import type { Props as NumberButtonProps } from 'component/NumberButton';
import type { ProductWithQuantity } from 'type/SalesRecord';

interface Props extends NumberButtonProps, ProductWithQuantity {}

export const Item = React.memo(({ name, price, ...props }: Props) => {
    return (
        <Flex justifyContent="space-between" alignItems="center">
            <Text>
                {name}
                <Badge ml={2} rounded="md" variant="solid" colorScheme="green" fontSize="lg" mr={2}>
                    ${price}
                </Badge>
            </Text>
            <NumberButton {...props} />
        </Flex>
    );
});
