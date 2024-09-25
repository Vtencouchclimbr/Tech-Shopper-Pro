import { Sequelize } from 'sequelize';
import { UserFactory } from '../models/index.js'; // Adjust the path as necessary
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', // Change if your database is hosted elsewhere
    dialect: 'postgres',
});
const User = UserFactory(sequelize); // Initialize the User model
const seedUsers = async () => {
    try {
        await sequelize.authenticate(); // Test the database connection
        console.log('Database connection established.');
        await sequelize.sync({ force: true }); // Sync the models (drops existing tables)
        console.log('Database synced.');
        // Seed users
        const users = [
            {
                username: 'admin',
                email: 'admin@example.com',
                password: 'admin123',
                role: 'admin',
            },
            {
                username: 'user1',
                email: 'user1@example.com',
                password: 'password1',
                role: 'user',
            },
            {
                username: 'user2',
                email: 'user2@example.com',
                password: 'password2',
                role: 'user',
            },
        ];
        for (const userData of users) {
            await User.create(userData); // Create user records
        }
        console.log('Users seeded successfully.');
    }
    catch (error) {
        console.error('Error seeding users:', error);
    }
    finally {
        await sequelize.close(); // Close the database connection
    }
};
seedUsers();
