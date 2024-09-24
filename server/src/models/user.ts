import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';

// Define the attributes for the User model
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role?: string; // Optional role field for authorization
}

// Define the optional attributes for creating a new User
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Define the User class extending Sequelize's Model
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Method to hash and set the password for the user
  public async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }

  // Method to validate password
  public async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}

// Define the UserFactory function to initialize the User model
export function UserFactory(sequelize: Sequelize): typeof User {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Ensure usernames are unique
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Ensure emails are unique
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user', // Default role is 'user'
      },
    },
    {
      tableName: 'users',  // Name of the table in PostgreSQL
      sequelize,            // The Sequelize instance that connects to PostgreSQL
      hooks: {
        // Before creating a new user, hash and set the password
        beforeCreate: async (user: User) => {
          if (user.password) {
            await user.setPassword(user.password);
          }
        },
        // Before updating a user, hash and set the new password if it has changed
        beforeUpdate: async (user: User) => {
          if (user.changed('password')) {
            await user.setPassword(user.password);
          }
        },
      },
    }
  );

  return User;  // Return the initialized User model
}
