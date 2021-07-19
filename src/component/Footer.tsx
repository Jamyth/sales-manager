import { Flex } from '@chakra-ui/layout';
import React from 'react';
import type { SafeReactChildren } from 'type/component';

interface Props {
    children: SafeReactChildren;
    justifyContent?: 'space-between' | 'center' | 'space-around';
    h?: string | number;
}

export const Footer = React.memo(({ children, justifyContent, h }: Props) => {
    return (
        <Flex
            alignItems="center"
            minH="60px"
            px={4}
            justifyContent={justifyContent}
            boxShadow="0 -3px 3px rgba(0,0,0,0.1)"
            h={h}
        >
            {children}
        </Flex>
    );
});
