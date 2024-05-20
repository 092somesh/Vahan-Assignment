require('dotenv').config(); // Load environment variables from .env file

// Database configuration
const config = {
  db: {
      host: 'localhost',                                // Database host
      user: 'root',                                // Database user
      password: '1234',                        // Database password
      database: 'somesh',                            // Database name
      // connectTimeout: process.env.DB_CONNECT_TIMEOUT,           // Connection timeout in milliseconds
      // dateStrings: process.env.DB_DATE_STRINGS === 'true'       // Convert date objects to strings
  },
  listPerPage: 10                 // Number of items to display per page
};

module.exports = config;
