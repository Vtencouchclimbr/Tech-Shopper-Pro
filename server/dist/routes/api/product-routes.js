import { Router } from 'express';
import { Product } from '../../models/products.js'; // Import your Product model
const productRouter = Router();
// GET all products
productRouter.get('/', async (_req, res) => {
    try {
        const products = await Product.findAll(); // Fetch all products
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});
// GET product by ID
productRouter.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id); // Find product by ID
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
});
// POST create new product
productRouter.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body); // Create new product
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
});
export { productRouter };
