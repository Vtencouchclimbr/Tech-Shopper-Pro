import sequelize from '../config/connection.js';
import { ProductFactory } from './products.js';  // Import Product factory function

// Initialize the Product model using the factory function and the Sequelize instance.
const Product = ProductFactory(sequelize);

// Export the Sequelize instance and the initialized Product model for use in other parts of the application.
export { Product };
