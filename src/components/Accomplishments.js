import React from 'react';
import './Accomplishments.css';
import { FaCar } from 'react-icons/fa';

const Accomplishments = () => {
  const accomplishments = [
    {
      id: 1,
      description: 'Rode in the Mercedes for the First Time',
      date: '2025-05-25',
      icon: <FaCar />,
    },
    // Add more accomplishments here if desired
  ];

  return (
    <div className="accomplishments-container">
      <h1 className="page-title">My Accomplishments</h1>
      <div className="accomplishments-list">
        {accomplishments.map((item) => (
          <div className="accomplishment-card" key={item.id}>
            <div className="icon-container">{item.icon}</div>
            <h3 className="accomplishment-description">{item.description}</h3>
            <p className="accomplishment-date">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accomplishments;