import React from 'react';
import { Footer as LayoutFooter } from 'component/Footer';
import { Box, Text } from '@chakra-ui/layout';
import { useHomeState } from '../hooks';
import { ObjectUtil } from 'jamyth-web-util';

export const Footer = React.memo(() => {
    const record = useHomeState((state) => state.record);
    const amount = record
        ? ObjectUtil.toArray(record, (_, product) => product).reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        : 0;

    return (
        <LayoutFooter justifyContent="space-between" h="80px">
            <Box fontSize="lg">是日銷售額</Box>
            <Text fontsize="lg">$ {amount}</Text>
        </LayoutFooter>
    );
});
