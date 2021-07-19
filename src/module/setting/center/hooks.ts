import Recoil from 'recoil'
import { SettingCenterState } from 'module/setting/center'
import type { State } from './type'

export const useSettingCenterState = <T>(fn: (state: State) => T): T => {
    const state = Recoil.useRecoilValue(SettingCenterState);
    return fn(state);
}