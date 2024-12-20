import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
//import logo from "../icon/icon.svg";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('home'); // Track the active menu

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Update the active menu when clicked
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">
        <img
          //className="main-icon"
          //src={logo}
          //alt="Logo"
          //style={{ width: '50px', height: '50px' }}
          
          className="main-icon"
          src="https://via.placeholder.com/50"
          alt="Logo"
          style={{ width: '50px', height: '50px' }}
        />
        
        <span className="icon-library"></span> Your Library
      </h2>
      <ul className="sidebar-menu">
        <li onClick={() => handleMenuClick('home')} className={activeMenu === 'home' ? 'active' : ''}>
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Home</span>
        </li>
        <li onClick={() => handleMenuClick('search')} className={activeMenu === 'search' ? 'active' : ''}>
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <span>Search</span>
        </li>
        {activeMenu === 'search' && (
          <div className="search-box">
            <span className="input">
              <input
                type="text"
                placeholder="Search playlists..."
              />
            </span>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
