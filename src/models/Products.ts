type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: 'Product 1', price: 50},
    {title: 'Product 2', price: 10},
    {title: 'Product 3', price: 3}
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFormPriceAfter: (price: number): Product[] => {
        return data.filter(item => (item.price >= price) ? true : false);
    }
}