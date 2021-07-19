import type { Product } from 'type/SalesRecord';

export interface State {
    menu: Product[] | null;
    openedItem: OpenedItem | null;
}

export interface OpenedItem {
    id: string | 'new';
    editingData: {
        name: string | null;
        price: number | null;
    };
}
