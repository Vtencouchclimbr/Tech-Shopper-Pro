import { Router } from 'express';
import { Product } from '../../models/products.js';  // Import your Product model
import dotenv from 'dotenv';

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;

const productRouter = Router();

// GET all products
productRouter.get('/', async (_req, res) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`, {
            headers: {
              'Content-Type': 'application/json',
            }
          });
          const data = await response.json();
          console.log(data);
        res.status(200).json(data);
        // res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

// GET product by ID
productRouter.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);  // Find product by ID
        if (product) {
            res.status(200).json(product);
            console.log(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
});

// POST create new product
productRouter.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);  // Create new product
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
});

export { productRouter };
