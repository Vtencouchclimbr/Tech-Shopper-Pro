import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
// Define the User class extending Sequelize's Model
export class User extends Model {
    // Method to hash and set the password for the user
    async setPassword(password) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
    // Method to validate password
    async validatePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}
// Define the UserFactory function to initialize the User model
export function UserFactory(sequelize) {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensure usernames are unique
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensure emails are unique
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user', // Default role is 'user'
        },
    }, {
        tableName: 'users', // Name of the table in PostgreSQL
        sequelize, // The Sequelize instance that connects to PostgreSQL
        hooks: {
            // Before creating a new user, hash and set the password
            beforeCreate: async (user) => {
                if (user.password) {
                    await user.setPassword(user.password);
                }
            },
            // Before updating a user, hash and set the new password if it has changed
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                    await user.setPassword(user.password);
                }
            },
        },
    });
    return User; // Return the initialized User model
}
