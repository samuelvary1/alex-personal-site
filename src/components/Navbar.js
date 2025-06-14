import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <h2 style={styles.brand}>Alex Serdukov</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/accomplishments" style={styles.navLink}>Accomplishments</Link></li>
          <li style={styles.navItem}><Link to="/favorite-photos" style={styles.navLink}>Favorite Photos</Link></li>
          <li style={styles.navItem}><Link to="/car-models" style={styles.navLink}>Latest Car Models</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// Define styles for the Navbar
const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 0',
    borderBottom: '2px solid #4CAF50',
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
};

export default Navbar;