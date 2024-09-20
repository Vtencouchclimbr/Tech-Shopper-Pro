import { productRouter } from './product-routes.js'; // Import product routes
import authRoutes from './auth-routes.js'; // Import auth routes (register, login)
import express from 'express';
const router = express.Router();
// Use product-related routes under /products
router.use('/products', productRouter);
// Use authentication routes under /auth
router.use('/auth', authRoutes); // This handles /auth/register and /auth/login
export default router;
