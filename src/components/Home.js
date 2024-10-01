// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Central Image */}
      <img
        src="/images/Profile.png"  // Use the path relative to the public folder 
        alt="Profile"       
        style={styles.image} // Inline styling for the image
      />
      <p style={styles.imageSubtitle}>Alex Serdukov</p>
      <h1 style={styles.heading}>Welcome to My Personal Site</h1>
      <p style={styles.description}>
        This is a space where I showcase my personal and professional achievements, share my favorite photos, and provide information on the latest car models.
      </p>
      <div style={styles.linksContainer}>
        <Link to="/accomplishments" style={styles.linkButton}>
          View My Accomplishments
        </Link>
        <Link to="/favorite-photos" style={styles.linkButton}>
          Favorite Photos
        </Link>
        <Link to="/car-models" style={styles.linkButton}>
          Latest Car Models
        </Link>
      </div>
    </div>
  );
};

// Define styles for the Home component, including image styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
  },
  image: {
    width: '200px',     // Set the image width
    height: '200px',    // Set the image height
    borderRadius: '50%', // Make the image circular
    marginBottom: '20px', // Add some spacing below the image
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow effect
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#4CAF50',
  },
  description: {
    fontSize: '18px',
    marginBottom: '30px',
    maxWidth: '600px',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  linkButton: {
    padding: '15px 30px',
    textDecoration: 'none',
    color: '#FFF',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
