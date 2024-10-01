import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Accomplishments from './components/Accomplishments';
import FavoritePhotos from './components/FavoritePhotos';
import CarModels from './components/CarModels';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route path="/favorite-photos" element={<FavoritePhotos />} />
        <Route path="/car-models" element={<CarModels />} />
      </Routes>
    </Router>
  );
}

export default App;