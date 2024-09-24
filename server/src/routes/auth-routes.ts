import { Router, Request, Response } from 'express';
import { User } from '../models/index.js'; // Import the User model
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Register function to create a new user
export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body; // Extract registration data
console.log('username', username, 'email', email, 'password', password);
  try {
    // Check if the user already exists based on email
    // const existingUser = await User.findOne({ where: { email } });
    // if (existingUser) {
    //   return res.status(400).json({ message: 'User already exists' });
    // }

    // Create a new user (password hashing is handled in the User model)
    const newUser = await User.create({
      username: `${username}`, // Optionally combine first and last name as username
      email,
      password, // Plain password, hashed by the model's beforeCreate hook
    });
    console.log('newUser', newUser);
    // Generate a JWT token for the newly registered user
    const secretKey = process.env.JWT_SECRET_KEY;
    console.log('secret', secretKey);
    if (!secretKey) {
      throw new Error('JWT secret key is not defined');
    }

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      secretKey,
      { expiresIn: '1h' }
    );
console.log('token', token);
    // Send the token and new user info as a JSON response
    return res.status(201).json({
      message: 'Registration successful',
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Login function to authenticate a user
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database by username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: User not found' });
    }

    // Validate the password using the model's validatePassword method
    const passwordIsValid = await user.validatePassword(password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed: Invalid password' });
    }

    // Get the secret key from environment variables
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      throw new Error('JWT secret key is not defined');
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      secretKey,
      { expiresIn: '1h' }
    );

    // Send the token and user info as a JSON response
    return res.json({
      message: 'Authentication successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new router instance
const router = Router();

// POST /register - Register a new user
router.post('/register', register); // Define the register route

// POST /login - Login a user
router.post('/login', login); // Define the login route

console.log(router);
export default router