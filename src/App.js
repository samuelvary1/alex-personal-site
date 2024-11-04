// src/App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Accomplishments from './components/Accomplishments';
import FavoritePhotos from './components/FavoritePhotos';
import CarDetails from './components/CarDetails';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
    });
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        {/* Protect routes: only show Accomplishments and FavoritePhotos if logged in */}
        {isLoggedIn ? (
          <>
            <Route path="/accomplishments" element={<Accomplishments />} />
            <Route path="/favorite-photos" element={<FavoritePhotos />} />
          </>
        ) : (
          <Route path="/accomplishments" element={<Login onLogin={setIsLoggedIn} />} />
        )}
        <Route path="/car-models" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
