import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import type { SafeReactChild } from 'type/component';
import { useHistory } from 'coil-react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useColorModeValue } from '@chakra-ui/react';

interface Props {
    children: SafeReactChild;
    rightNode?: SafeReactChild;
    onRightNodeClick?: () => void;
    canGoBack?: boolean;
}

export const Header = React.memo(({ children, rightNode, canGoBack, onRightNodeClick }: Props) => {
    const history = useHistory();

    const bgColor = useColorModeValue('white', 'gray.700');

    return (
        <Box position="sticky" top={0} bgColor={bgColor} shadow="md">
            <Flex h="60px" width="100%" justifyContent="center" alignItems="center" px={4} position="relative">
                {canGoBack && (
                    <Box
                        left={4}
                        fontSize="1.5rem"
                        position="absolute"
                        top="50%"
                        onClick={history.goBack}
                        transform="translateY(-50%)"
                    >
                        <AiOutlineLeft />
                    </Box>
                )}
                {children}
                {rightNode && (
                    <Box
                        right={4}
                        top="50%"
                        transform="translateY(-50%)"
                        position="absolute"
                        fontSize="1.5rem"
                        onClick={onRightNodeClick}
                    >
                        {rightNode}
                    </Box>
                )}
            </Flex>
        </Box>
    );
});
