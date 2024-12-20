import React, { useState } from 'react';
import './OptionSection.css';

function OptionsSection() {
  const [selectedOption, setSelectedOption] = useState(null); // State to track the selected option

  const options = [
    { id: 1, label: 'Shuffle and Play' },
    { id: 2, label: 'Create Shuffled Playlist' },
    { id: 3, label: 'Create Playlist for a Day' },
    { id: 4, label: 'Delete Playlist' },
  ];

  const handleOptionClick = (id) => {
    setSelectedOption(id); // Set the selected option
  };
  
  const handleRun = () => {
    if (selectedOption) {
      alert(`Running option: ${options.find((o) => o.id === selectedOption).label}`);
    } else {
      alert('Please select an option first!');
    }
  };
  return (
    <div className="options-section">
      <h2 className="options-title">Options</h2>
      <ul className="options-list">
        {options.map((option) => (
          <li key={option.id} className="options-item">
            <button
              className={`options-button ${
                selectedOption === option.id ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <button className="run-button" onClick={handleRun}>
        Run
      </button> 
    </div>
    
  );
}

export default OptionsSection;
