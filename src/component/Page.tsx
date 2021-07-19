import { Flex } from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChild, SafeReactChildren } from 'type/component';

interface Props extends FlexProps {
    children: SafeReactChildren;
    header?: SafeReactChild;
    footer?: SafeReactChild;
}

export const Page = React.memo(({ children, header, footer, ...props }: Props) => {
    return (
        <Flex flexDirection="column" flex={1} height="100%" maxHeight="100%" overflow="hidden">
            {header}
            <Flex {...props} flex={1} flexDirection="column" overflowX="hidden" overflowY="scroll">
                {children}
            </Flex>
            {footer}
        </Flex>
    );
});
