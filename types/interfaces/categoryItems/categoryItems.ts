export interface CategoryItem {
    id: string;
    name: string;
    image?: string;
    alt: string;
};

export interface Item {
    id: string;
    name: string;
    description: string;
    images: string[],
    price: number,
    discount?: number,
    rate: number
}