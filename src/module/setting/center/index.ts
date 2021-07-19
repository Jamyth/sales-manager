import Recoil from 'recoil';
import { injectLifeCycle, useHistory } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';

const initialState: State = {};

export const SettingCenterState = Recoil.atom({
    key: 'SettingCenterState',
    default: initialState,
});

export const useSettingCenterAction = () => {
    const history = useHistory<any>();

    const toMenuSetting = () => {
        history.push(`/setting/menu`);
    };

    return {
        toMenuSetting,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useSettingCenterAction);
