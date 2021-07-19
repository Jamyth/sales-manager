export type SalesRecord = Record<string, ProductWithQuantity>;

export type ProductWithQuantity = Product & {
    quantity: number;
};

export interface Product {
    id: string;
    name: string;
    price: number;
}
