import type { Product } from 'type/SalesRecord';
import { SalesRecordUtil } from './SalesRecordUtil';

export class MenuUtil {
    static readonly KEY = '@@SalesRecord/menu';

    static getMenu(): Product[] {
        const rawMenu = localStorage.getItem(MenuUtil.KEY);
        if (!rawMenu) {
            const newMenu: Product[] = [];
            localStorage.setItem(MenuUtil.KEY, JSON.stringify(newMenu));
            return newMenu;
        }
        return JSON.parse(rawMenu);
    }

    static updateMenu(menu: Product[]) {
        localStorage.setItem(MenuUtil.KEY, JSON.stringify(menu));
        SalesRecordUtil.refreshRecord();
    }
}
