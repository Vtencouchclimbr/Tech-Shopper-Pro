import { User } from '../models/user.js'; // Import the User model
import { userSeedData } from './user-seeds.js'; // Import the seed data array
import sequelize from '../config/connection.js';
const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
        // Use bulkCreate to seed the user data, with individualHooks to hash passwords
        await User.bulkCreate(userSeedData, { individualHooks: true });
        console.log('\n----- USERS SEEDED -----\n');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedAll();
