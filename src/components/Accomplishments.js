// src/components/Accomplishments.js

import React, { useState } from 'react';
import './Accomplishments.css';
import { FaTrophy, FaMedal, FaFootballBall, FaGraduationCap, FaTrash } from 'react-icons/fa'; // Import trash icon from react-icons

const Accomplishments = () => {
  const [accomplishments, setAccomplishments] = useState([
    { id: 1, description: "Graduated with a Bachelor's in Computer Science", date: '2018-05-15', icon: <FaGraduationCap /> },
    { id: 2, description: 'Completed a marathon', date: '2019-11-03', icon: <FaMedal /> },
    { id: 3, description: 'Won a football championship', date: '2021-09-10', icon: <FaFootballBall /> },
  ]);

  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [selectedIconName, setSelectedIconName] = useState('FaTrophy');

  const iconMapping = {
    FaTrophy: <FaTrophy />,
    FaMedal: <FaMedal />,
    FaFootballBall: <FaFootballBall />,
    FaGraduationCap: <FaGraduationCap />,
  };

  const addAccomplishment = (e) => {
    e.preventDefault();
    if (description && date) {
      const newAccomplishment = {
        id: accomplishments.length + 1,
        description,
        date,
        icon: iconMapping[selectedIconName],
      };
      setAccomplishments([...accomplishments, newAccomplishment]);
      setDescription('');
      setDate('');
      setSelectedIconName('FaTrophy');
    }
  };

  // Function to delete an accomplishment by its ID
  const deleteAccomplishment = (id) => {
    const updatedAccomplishments = accomplishments.filter((item) => item.id !== id);
    setAccomplishments(updatedAccomplishments);
  };

  return (
    <div className="accomplishments-container">
      <h1 className="page-title">My Accomplishments</h1>
      <div className="accomplishments-list">
        {accomplishments.map((item) => (
          <div className="accomplishment-card" key={item.id}>
            <div className="icon-container">{item.icon}</div>
            <h3 className="accomplishment-description">{item.description}</h3>
            <p className="accomplishment-date">{item.date}</p>
            <FaTrash
              className="delete-icon"
              onClick={() => deleteAccomplishment(item.id)}
              title="Delete Accomplishment"
            />
          </div>
        ))}
      </div>

      <h2 className="form-title">Add a New Accomplishment</h2>
      <form className="accomplishment-form" onSubmit={addAccomplishment}>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <input
            type="text"
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter accomplishment description"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Icon Picker */}
        <div className="form-group">
          <label className="form-label">Select Icon:</label>
          <div className="icon-picker">
            {Object.keys(iconMapping).map((iconName) => (
              <div
                key={iconName}
                className={`icon ${selectedIconName === iconName ? 'selected' : ''}`}
                onClick={() => setSelectedIconName(iconName)}
              >
                {iconMapping[iconName]}
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">Add Accomplishment</button>
      </form>
    </div>
  );
};

export default Accomplishments;