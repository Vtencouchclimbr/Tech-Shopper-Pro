import { productRouter } from './product-routes.js';
import express from 'express';
const router = express.Router();

router.use('/products', productRouter);

export default router;