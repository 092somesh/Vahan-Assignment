// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require('./services/db');

// Create an instance of Express app
const app = express();

// connection.query();
// Import routers
const entityRouter = require('./routes/entitiesRoutes');
const dataRouter = require('./routes/dataRoutes');

// CORS configuration
const corsOptions = {
    origin: "*" // Adjusted origin URL
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Middleware for parsing URL-encoded requests
app.use(bodyParser.urlencoded({ extended: true }));

// Default route handler
app.get('/', (req, res) => {
    res.status(200).json("hello world");
});

// Register entity routes
app.use('/entity', entityRouter);

// Register data routes
app.use('/data', dataRouter);

// Define port for the server to listen on
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
