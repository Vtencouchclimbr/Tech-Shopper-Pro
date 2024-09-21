const forceDatabaseRefresh = false; // Flag to control whether to force a database refresh on server start
import express from 'express';
import sequelize from './config/connection.js'; // Import the initialized Sequelize instance
import routes from './routes/index.js'; // Import the routes for handling different endpoints
import authMiddleware from './middleware/auth.js'; // Import the authentication middleware
const app = express(); // Create an Express application
const PORT = process.env.PORT || 3001; // Define the port for the server to listen on
// Serves static files from the client's dist folder, typically for a built React application
app.use(express.static('../client/dist'));
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(routes); // Use the imported routes for handling API endpoints
app.use('/api/auth-routes/register', authMiddleware); // Apply the authentication middleware to the users endpoint
// Sync the Sequelize models with the database
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`); // Log a message when the server starts
    });
});
