import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ObjectUtil } from 'jamyth-web-util';
import { NavigationService } from 'util/NavigationService';
import { Switch, Route } from 'react-router-dom';
import { Style } from './Style';
import { MerchantConfig } from 'merchant-conf/current/MerchantConfig';

export const theme = extendTheme({
    config: {
        initialColorMode: MerchantConfig.colorMode,
    },
});

export const Main = React.memo(() => {
    return (
        <ChakraProvider theme={theme}>
            <Style />
            <Switch>
                {ObjectUtil.toArray(NavigationService, (path, component) => (
                    <Route exact key={path} component={component} path={path} />
                ))}
            </Switch>
        </ChakraProvider>
    );
});
