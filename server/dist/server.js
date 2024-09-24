import dotenv from 'dotenv'; // Import dotenv to load environment variables
dotenv.config(); // Load the .env file contents
const forceDatabaseRefresh = false; // Flag to control whether to force a database refresh on server start
import express from 'express';
import cors from 'cors'; // Import CORS package
import sequelize from './config/connection.js'; // Import the initialized Sequelize instance
import routes from './routes/index.js'; // Import the routes for handling different endpoints
const app = express(); // Create an Express application
const PORT = process.env.PORT || 3001; // Define the port for the server to listen on
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL (adjust if necessary)
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials (e.g., cookies)
}));
// Serves static files from the client's dist folder, typically for a built React application
app.use(express.static('../Client/dist'));
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(routes); // Use the imported routes for handling API endpoints
// Sync the Sequelize models with the database
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`); // Log a message when the server starts
    });
});
