import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your stylesheet

const Home = () => {
  return (
    <div className="home-container">
      <img
        src="/images/Profile.png"
        alt="Profile"
        className="home-image"
      />
      <p className="home-subtitle">Alex Serdukov</p>
      <h1 className="home-heading">Welcome to My Personal Site</h1>
      <p className="home-description">
        This is a space where I showcase my personal and professional achievements, share my favorite photos, and provide information on the latest car models.
      </p>
      <div className="home-links">
        <Link to="/accomplishments" className="link-button">
          View My Accomplishments
        </Link>
        <Link to="/favorite-photos" className="link-button">
          Favorite Photos
        </Link>
        <Link to="/car-models" className="link-button">
          Latest Car Models
        </Link>
      </div>
    </div>
  );
};

export default Home;