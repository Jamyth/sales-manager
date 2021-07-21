import { WebpackBuilder } from '@iamyth/webpack-runner';
import path from 'path';

new WebpackBuilder({
    projectDirectory: path.join(__dirname, '..'),
    tsconfigFilePath: path.join(__dirname, '../config/tsconfig.src.json'),
    enableServiceWorker: true,
    dynamicConfigResolvers: [
        {
            prefix: 'merchant-conf/current',
            resolver: (env) => (env ? path.resolve(__dirname, `../src/merchant-conf/${env}`) : null),
        },
    ],
}).run();
