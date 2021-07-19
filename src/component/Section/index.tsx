import { Box } from '@chakra-ui/react';
import { theme } from 'module/main/Main';
import React from 'react';
import type { SafeReactChildren } from 'type/component';
import { Row } from './Row';

interface Props {
    children: SafeReactChildren;
}

export class Section extends React.PureComponent<Props> {
    static Row = Row;

    render() {
        const isLight = theme.config.initialColorMode === 'light';
        const backgroundColor = isLight ? 'white' : 'gray.700';
        return (
            <Box borderTopWidth="1px" borderBottomWidth="1px" backgroundColor={backgroundColor} mb={8}>
                {this.props.children}
            </Box>
        );
    }
}
