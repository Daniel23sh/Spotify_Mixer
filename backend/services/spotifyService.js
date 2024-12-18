const SpotifyWebApi = require('spotify-web-api-node'); // Import Spotify Web API
require('dotenv').config(); // Load environment variables
const logger = require('../config/logger.js'); // Import logger

// Initialize the Spotify API client
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

// Log successful initialization
logger.info(`Spotify API initialized with Client ID: ${process.env.SPOTIFY_CLIENT_ID}`);
logger.info(`Redirect URI: ${process.env.SPOTIFY_REDIRECT_URI}`);

//module.exports = spotifyApi; // Explicitly export the instance


// Exchange authorization code for access and refresh tokens
async function exchangeCodeForTokens(code) {
  try {
    logger.info('Exchanging authorization code for tokens...');
    const data = await spotifyApi.authorizationCodeGrant(code);

    const accessToken = data.body['access_token'];
    const refreshToken = data.body['refresh_token'];

    // Set tokens in the Spotify API instance
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.setRefreshToken(refreshToken);

    logger.info('Access and refresh tokens set successfully.');
    return { accessToken, refreshToken };
  } catch (error) {
    logger.error(`Error exchanging code for tokens: ${error.message}`);
    throw error;
  }
}

// Fetch user's playlists using the stored access token
async function getUserPlaylists() {
  try {
    logger.debug('Calling Spotify API to fetch user playlists...'); // More technical log
    const playlists = await spotifyApi.getUserPlaylists();
    logger.debug('Spotify API responded with user playlists.');
    return playlists.body; // Return the raw data to the route
  } catch (error) {
    logger.error(`Spotify API error: ${error.message}`);
    throw error; // Propagate the error to the route
  }
}




module.exports = {
  spotifyApi,
  exchangeCodeForTokens,
  getUserPlaylists,
};