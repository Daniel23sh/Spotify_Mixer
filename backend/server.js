const express = require('express');
const spotifyRoutes = require('./routes/spotifyRoutes.js');
require('dotenv').config(); // Load environment variables
const logger = require('./config/logger.js');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Use Spotify routes
app.use('/', spotifyRoutes);

// Start the server
app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
