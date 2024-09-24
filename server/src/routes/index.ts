import apiRoutes from './api/index.js'
import express from 'express';
import authRoutes from './auth-routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/api', apiRoutes);

export default router;