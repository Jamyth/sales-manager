import { Heading } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChild } from 'type/component';
import { Header } from './Header';

interface Props {
    title: SafeReactChild;
}

export const StackHeader = React.memo(({ title }: Props) => {
    return (
        <Header canGoBack>
            <Heading fontSize="lg">{title}</Heading>
        </Header>
    );
});
