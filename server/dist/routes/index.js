import apiRoutes from './api/index.js';
import authRoutes from './auth-routes.js';
import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
const router = express.Router();
router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);
export default router;
