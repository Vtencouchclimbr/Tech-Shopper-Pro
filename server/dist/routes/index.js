import apiRoutes from './api/index.js';
import authRouter from './auth-routes.js'; // Import auth routes
import express from 'express';
const router = express.Router();
router.use('/api', apiRoutes);
router.use('/auth', authRouter); // Connect the auth routes
export default router;
