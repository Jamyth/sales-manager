import React from 'react';
import {
    Drawer as ChakraDrawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
} from '@chakra-ui/react';
import type { SafeReactChildren } from 'type/component';

interface Props {
    isOpen: boolean;
    children: SafeReactChildren;
    onClose: () => void;
    title?: string;
}

export const Drawer = React.memo(({ isOpen, children, onClose, title }: Props) => {
    return (
        <ChakraDrawer isOpen={isOpen} onClose={onClose} placement="bottom">
            <DrawerOverlay />
            <DrawerContent borderRadius="10px 10px 0 0">
                <DrawerHeader>{title}</DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody>{children}</DrawerBody>
            </DrawerContent>
        </ChakraDrawer>
    );
});
