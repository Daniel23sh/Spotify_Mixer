import React, { useState } from 'react';
import './MainSection.css';

function MainSection() {
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  // Fake playlist data
  const playlists = [
    { id: 1, name: 'Chill Vibes', songs: 2, image: 'https://via.placeholder.com/150/09f/fff.png' },
    { id: 2, name: 'Workout Mix', songs: 2, image: 'https://via.placeholder.com/150/ff0/000.png' },
    { id: 3, name: 'Focus Time', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 4, name: 'Focus Time1', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 5, name: 'Focus Time2', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 6, name: 'Focus Time3', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 7, name: 'Focus Time4', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 8, name: 'Focus Time5', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 9, name: 'Focus Time6', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 10, name: 'Focus Time7', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 11, name: 'Focus Time8', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 12, name: 'Focus Time9', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 13, name: 'Focus Time10', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 14, name: 'Focus Time11', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 15, name: 'Focus Time12', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 16, name: 'Focus Time13', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 17, name: 'Focus Time14', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },
    { id: 18, name: 'Focus Time15', songs: 3, image: 'https://via.placeholder.com/150/f00/fff.png' },

  ];

  const handlePlaylistClick = (id) => {
    setSelectedPlaylists((prev) =>
      prev.includes(id) ? prev.filter((playlistId) => playlistId !== id) : [...prev, id]
    );
  };

  return (
    <div className="main-section">
      <h1 className="section-title">Your Playlists</h1>
      <div className="playlist-container">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className={`playlist-card ${
              selectedPlaylists.includes(playlist.id) ? 'selected' : ''
            }`}
            onClick={() => handlePlaylistClick(playlist.id)}
          >
            <img src={playlist.image} alt={playlist.name} className="playlist-image" />
            <div className="playlist-info">
              <h3 className="playlist-name">{playlist.name}</h3>
              <p className="playlist-songs">{playlist.songs} songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
