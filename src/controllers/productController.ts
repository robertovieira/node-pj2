import { Request, Response } from 'express';

import { Product } from '../models/Products';

export const product = (req: Request, res: Response) => {
    // let name: string = req.body.name as string;

    let list = Product.getAll();
    let expensiveList = Product.getFormPriceAfter(12);

    res.render('pages/product', {
        products: list,
        expensives: expensiveList
    });
}