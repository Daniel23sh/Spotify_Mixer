const express = require('express');
const router = express.Router();
const { spotifyApi, exchangeCodeForTokens, getUserPlaylists } = require('../services/spotifyService.js'); // Import Spotify API instance
const logger = require('../config/logger.js'); // Import logger


// Route: Redirect user to Spotify login
router.get('/login', (req, res) => {
  const scopes = [
    'playlist-read-private',
    'playlist-modify-private',
    'playlist-modify-public',
    'user-read-private',
    'user-read-email',
  ];

  try {
    logger.info('Attempting to generate Spotify authorize URL...');
    const authorizeURL = spotifyApi.createAuthorizeURL(scopes); // Generate URL
    res.redirect(authorizeURL); // Redirect user to Spotify login
  } catch (error) {
    logger.error(`Failed to generate login URL: ${error.message}`);
    res.status(500).send('Failed to generate login URL.');
  }
});

// Route: Handle Spotify callback and exchange code for tokens
router.get('/callback', async (req, res) => {
  const { code } = req.query; // Extract the "code" parameter from the query string

  if (!code) {
    logger.error('No authorization code received.');
    return res.status(400).send('Authorization code is missing.');
  }

  try {
    logger.info('Authorization code received. Exchanging for tokens...');
    const tokens = await exchangeCodeForTokens(code); // Exchange code for tokens
    logger.info('Tokens successfully exchanged and set.');
    res.send('Successfully authenticated with Spotify!');
  } catch (error) {
    logger.error(`Error handling callback: ${error.message}`);
    res.status(500).send('Failed to authenticate with Spotify.');
  }
});

router.get('/playlists', async (req, res) => { 
   try{
    logger.info('Trying to fetch the playlists...');
    const playlists = await getUserPlaylists(); // Await the async function
    const playlistDetails = playlists.items.map((playlist) => ({
      name: playlist.name,
      image: playlist.images && playlist.images.length > 0 ? playlist.images[0].url : null, // Use null if no image
    }));
    logger.info('Playlists successfully fetched.');
    res.json(playlistDetails);
   }catch(error){
    logger.error(`Failed to fetch playlists in the route: ${error.message}`);
    res.status(500).send('Failed to fetch playlists.');
   }


});


module.exports = router;
