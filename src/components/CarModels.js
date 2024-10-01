// src/components/CarModels.js

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './CarModels.css'; // Import CSS for styling

const CarModels = () => {
  const [carModels, setCarModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_ENDPOINT = 'https://api.api-ninjas.com/v1/cars';
  const API_KEY = process.env.REACT_APP_CARS_API_KEY;
  const fetchCarData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_ENDPOINT, {
        headers: {
          'X-Api-Key': API_KEY,
        },
        params: {
          make: 'toyota',  // Ensure to use a valid car make like 'toyota', 'honda', etc.
          model: 'corolla', // Optional: specify a valid car model
          year: 2020,       // Optional: specify a valid year
          limit: 10,
        },
      });
      setCarModels(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching car data:', err);
      setError('Failed to fetch car data. Please try again later.');
      setLoading(false);
    }
  }, [API_KEY, API_ENDPOINT]);

  // Fetch car data on component mount
  useEffect(() => {
    fetchCarData();
  }, [fetchCarData]);

  return (
    <div className="car-models-container">
      <h1 className="page-title">Latest Car Models</h1>
      {loading && <p>Loading car models...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="car-models-list">
        {carModels.map((car, index) => (
          <div className="car-card" key={index}>
            <div className="car-details">
              <h2 className="car-name">{car.make} {car.model} ({car.year})</h2>
              <p className="car-description">{car.configuration || 'No description available.'}</p>
              <p className="car-price"><strong>Average Price:</strong> {car.price ? `$${car.price}` : 'Price not available'}</p>
              <p className="car-score"><strong>Horsepower:</strong> {car.horsepower || 'N/A'} HP</p>
              <p className="car-mpg"><strong>MPG:</strong> {car.city_mpg} city / {car.highway_mpg} highway</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarModels;