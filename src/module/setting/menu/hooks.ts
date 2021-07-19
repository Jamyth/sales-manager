import Recoil from 'recoil'
import { SettingMenuState } from 'module/setting/menu'
import type { State } from './type'

export const useSettingMenuState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(SettingMenuState);
    return fn(state);
}