import React from 'react';
import { Global } from '@emotion/react';

export const Style = React.memo(() => {
    return (
        <Global
            styles={`
            html, body, #app {
                height: 100%;
                overflow: hidden;
            }
        `}
        />
    );
});
