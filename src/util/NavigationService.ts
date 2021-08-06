import type React from 'react';
import { MainComponent as Home } from 'module/home';
import { MainComponent as SettingCenter } from 'module/setting/center';
import { MainComponent as SettingMenu } from 'module/setting/menu';

export type Path = '/' | '/setting' | '/setting/menu';

export const NavigationService: Record<Path, React.ComponentType> = {
    '/': Home,
    '/setting': SettingCenter,
    '/setting/menu': SettingMenu,
};
