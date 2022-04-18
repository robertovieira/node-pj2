import { Router } from 'express';

import * as ProductController from '../controllers/productController';

const router = Router();

// router.get('/', (req: Request, res: Response) => {
//     res.render('home', {
//         name: 'Roberto',
//         age: 80
//     });
// });

// router.get('/contato', (req: Request, res: Response) => {
//     res.send("Pagina do contato");
// });

// router.get('sobre', (req: Request, res: Response) => {
//     res.send("Página do Sobre");
// });

// router.get('/nome', (req: Request, res: Response) => {
//     res.render('pages/nome');
// });

router.get('/products', ProductController.product);

export default router;