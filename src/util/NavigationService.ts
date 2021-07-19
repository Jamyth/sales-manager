import type React from 'react';
import { async } from 'coil-react';

export type Path = '/' | '/setting' | '/setting/menu';

export const NavigationService: Record<Path, React.ComponentType> = {
    '/': async(() => import('module/home'), 'MainComponent'),
    '/setting': async(() => import('module/setting/center'), 'MainComponent'),
    '/setting/menu': async(() => import('module/setting/menu'), 'MainComponent'),
};
