import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarDetails.css';

const CarDetails = () => {
  const [carImage, setCarImage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRandomCarImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://api.unsplash.com/photos/random',
        {
          headers: { Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}` },
          params: { query: 'modern car' }
        }
      );
      setCarImage(response.data.urls.regular); // Set the image URL from Unsplash
    } catch (error) {
      console.error('Error fetching image:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomCarImage();
  }, []);

  return (
    <div className="car-details-container">
      <h1 className="page-title">Magical Car Portal</h1>
      {loading && <p>Loading image...</p>}
      <div className="car-details">
        {carImage && <img src={carImage} alt="Random Car" className="car-image" />}
      </div>
      <button
        className="shuffle-button"
        onClick={fetchRandomCarImage}
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Get Another Car'}
      </button>
    </div>
  );
};

export default CarDetails;
