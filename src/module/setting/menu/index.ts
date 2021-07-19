import Recoil from 'recoil';
import { injectLifeCycle, useCoilState } from 'coil-react';
import { Main } from './Main';
import type { OpenedItem, State } from './type';
import type { Location } from 'history';
import { MenuUtil } from 'util/MenuUtil';
import type { Product } from 'type/SalesRecord';
import { ObjectUtil } from 'jamyth-web-util';
import { v4 as uuid } from 'uuid';

const initialState: State = {
    menu: null,
    openedItem: null,
};

export const SettingMenuState = Recoil.atom({
    key: 'SettingMenuState',
    default: initialState,
});

export const useSettingMenuAction = () => {
    const { getState, setState } = useCoilState(SettingMenuState);

    const getMenu = () => {
        const menu = MenuUtil.getMenu();
        setState((state) => (state.menu = menu));
    };

    const openModal = (item?: Product) => {
        if (item) {
            const { id, ...editingData } = item;
            setState(
                (state) =>
                    (state.openedItem = {
                        id,
                        editingData,
                    }),
            );
        } else {
            setState(
                (state) =>
                    (state.openedItem = {
                        id: 'new',
                        editingData: { name: null, price: null },
                    }),
            );
        }
    };

    const closeModal = () => {
        setState((state) => (state.openedItem = null));
    };

    const updateOpenedItem = (item: Partial<OpenedItem['editingData']>) => {
        setState((state) => ObjectUtil.safeAssign(state.openedItem?.editingData, item));
    };

    const createOrUpdateProduct = () => {
        const openedItem = getState().openedItem;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked
        const menu = [...getState().menu!];
        if (!openedItem) {
            return;
        }
        const { id, editingData } = openedItem;
        if (id === 'new') {
            const _id = uuid();
            const product: Product = {
                id: _id,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked
                name: editingData.name!,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked
                price: editingData.price!,
            };
            menu.push(product);
        } else {
            const index = menu.findIndex((product) => product.id === id);
            if (index !== -1) {
                const product: Product = {
                    id,
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked
                    name: editingData.name!,
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked
                    price: editingData.price!,
                };
                menu[index] = product;
            }
        }

        MenuUtil.updateMenu(menu);
        setState((state) => (state.menu = menu));
        closeModal();
    };

    const deleteProduct = (id: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked
        const menu = [...getState().menu!];
        const index = menu.findIndex((state) => state.id === id);
        if (index === -1) {
            return;
        }
        menu.splice(index, 1);
        MenuUtil.updateMenu(menu);
        setState((state) => (state.menu = menu));
    };

    const onRouteMatched = (routeParameter: any, location: Location<Readonly<any> | undefined>) => {
        getMenu();
    };

    return {
        onRouteMatched,
        openModal,
        closeModal,
        updateOpenedItem,
        createOrUpdateProduct,
        deleteProduct,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useSettingMenuAction);
