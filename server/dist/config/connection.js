import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file into process.env
import { Sequelize } from 'sequelize';
// Ensure all required environment variables are available
if (!process.env.DB_URL && (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD)) {
    throw new Error('Database connection details are missing from environment variables.');
}
// Initialize Sequelize with either DB_URL or individual credentials
const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL, {
        dialect: 'postgres', // Explicitly define the dialect
        dialectOptions: {
            decimalNumbers: true, // Ensure decimal numbers are handled correctly
        },
        logging: false, // Disable logging queries in the console (optional)
    })
    : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || '', {
        host: process.env.DB_HOST || 'localhost', // Fallback to localhost
        port: parseInt(process.env.DB_PORT || '5432'), // Use port from .env or fallback to 5432
        dialect: 'postgres', // Specify PostgreSQL as the dialect
        dialectOptions: {
            decimalNumbers: true,
        },
        logging: false, // Disable logging for cleaner output (optional)
    });
export default sequelize;
