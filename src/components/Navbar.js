// src/components/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');  // Redirect to the home page after logout
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <h2 style={styles.brand}>My Personal Site</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/car-models" style={styles.navLink}>Latest Car Models</Link></li>
          {isLoggedIn ? (
            <>
              <li style={styles.navItem}><Link to="/accomplishments" style={styles.navLink}>Accomplishments</Link></li>
              <li style={styles.navItem}><Link to="/favorite-photos" style={styles.navLink}>Favorite Photos</Link></li>
              <li style={styles.navItem}>
                <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li style={styles.navItem}><Link to="/login" style={styles.navLink}>Login</Link></li>
              <li style={styles.navItem}><Link to="/register" style={styles.navLink}>Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

// Define styles for the Navbar
const styles = {
  nav: {
    backgroundColor: '#333',  // Dark background for the navbar
    padding: '10px 0',
    borderBottom: '2px solid #4CAF50', // Accent border
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  brand: {
    color: '#FFFFFF',
    fontSize: '24px',
    margin: 0,
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '18px',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#4CAF50',
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s ease',
  },
};

// Export the Navbar component
export default Navbar;
