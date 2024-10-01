import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
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

// Define some basic inline styles for the Home component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#4CAF50', // Use your preferred color scheme here
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
    backgroundColor: '#007BFF', // Use your preferred button color
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;