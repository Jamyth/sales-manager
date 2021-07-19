import Recoil from 'recoil';
import { injectLifeCycle, useCoilState } from 'coil-react';
import { Main } from './Main';
import type { State } from './type';
import type { Location } from 'history';
import { SalesRecordUtil } from 'util/SalesRecordUtil';
import { MenuUtil } from 'util/MenuUtil';

const initialState: State = {
    record: null,
};

export const HomeState = Recoil.atom({
    key: 'HomeState',
    default: initialState,
});

export const useHomeAction = () => {
    const { getState, setState } = useCoilState(HomeState);

    const onMount = () => {
        setState((state) => (state.record = SalesRecordUtil.getDateRecord()));
    };

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<any> | undefined>) => {
        // TODO
    };

    const updateQuantity = (value: number, id: string) => {
        const record = getState().record;
        if (!record) {
            return;
        }
        const item = record[id];
        if (item) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- item is exist
            setState((state) => (state.record![id].quantity = value));
        } else {
            const product = MenuUtil.getMenu().find((_) => _.id === id);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- record is exist
            setState((state) => (state.record![id] = { ...product!, quantity: value }));
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked
        SalesRecordUtil.updateDateRecord(getState().record!);
    };

    return {
        onMount,
        onRouteMatched,
        updateQuantity,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useHomeAction);
