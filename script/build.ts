import { WebpackBuilder } from '@iamyth/webpack-runner';
import path from 'path';
import fs from 'fs-extra';

let envPath: string | null = null;

new WebpackBuilder({
    projectDirectory: path.join(__dirname, '..'),
    tsconfigFilePath: path.join(__dirname, '../config/tsconfig.src.json'),
    enableServiceWorker: true,
    dynamicConfigResolvers: [
        {
            prefix: 'merchant-conf/current',
            resolver: (env) => {
                if (env) {
                    envPath = path.resolve(__dirname, `../src/merchant-conf/${env}`);
                    return envPath;
                }
                return null;
            },
        },
    ],
    onSuccess: () => {
        if (envPath) {
            const destSrc = path.join(__dirname, '../build/dist');
            fs.copySync(path.join(envPath, '/asset'), destSrc, {
                overwrite: true,
                recursive: true,
            });
            console.info(`Asset overwrite complete, from ${envPath} to ${destSrc}`);
        }
    },
}).run();
