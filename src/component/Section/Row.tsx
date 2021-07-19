import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChild } from 'type/component';
import type { IconType } from 'react-icons';
import { BsChevronRight } from 'react-icons/bs';
import { MerchantConfig } from 'merchant-conf/current/MerchantConfig';
import { useHistory } from 'coil-react';

interface Props {
    label: SafeReactChild;
    icon?: IconType;
    linkOrAction?: string | (() => void);
    children?: SafeReactChild;
}

export const Row = React.memo(({ label, icon: Icon, children, linkOrAction }: Props) => {
    const history = useHistory();

    const onClick = () => {
        if (typeof linkOrAction === 'string') {
            history.push(linkOrAction);
        } else {
            linkOrAction?.();
        }
    };

    return (
        <Flex
            alignItems="center"
            css={{
                '&:not(:last-of-type) > .content': {
                    borderBottomWidth: '1px',
                },
            }}
        >
            {Icon && (
                <Box ml={4} mr={2} color={MerchantConfig.theme} py={3}>
                    <Icon fontSize="24px" />
                </Box>
            )}
            <Flex
                onClick={onClick}
                flex={1}
                pl={Icon ? 0 : 4}
                py={3}
                pr={4}
                className="content"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex flex={1} fontSize="lg">
                    {label}
                </Flex>
                <Flex fontSize="lg">{children ? children : <BsChevronRight />}</Flex>
            </Flex>
        </Flex>
    );
});
