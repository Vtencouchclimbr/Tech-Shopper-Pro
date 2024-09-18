import express from 'express';
import type { Request, Response} from 'express';
import { Products } from '../../models/index.js';

const router = express.Router();

// GET /feedback - Get all Products
router.get('/', async (_req: Request, res: Response) => {
  try {
    const feedbacks = await Products.findAll();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
