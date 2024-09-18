import sequelize from '../config/connection.js';
import { FeedbackFactory, applyAssociations } from './feedback.js';  // Import Feedback and associations
import { CategoryFactory } from './category.js';  // Import Category model factory

// Initialize the models using the factory functions and the Sequelize instance.
const Category = CategoryFactory(sequelize);
const Feedback = FeedbackFactory(sequelize);

// Apply the associations between Feedback and Category
applyAssociations();

// Export the Sequelize instance and the initialized models for use in other parts of the application.
export { Feedback, Category };