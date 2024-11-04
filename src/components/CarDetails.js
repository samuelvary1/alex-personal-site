// src/components/CarDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarDetails.css'; // Import a CSS file for styling (optional)

const CarDetails = () => {
  const [car, setCar] = useState(null); // State to store the car details
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store error messages

  // Access API key from environment variables
  const API_KEY = process.env.REACT_APP_API_NINJAS_KEY;
  const API_URL = 'https://api.api-ninjas.com/v1/cars';

  // Function to fetch a random car model and then fetch the car details using the selected model
  const fetchRandomCar = async () => {
    try {
      setLoading(true);
      setError(null);

      // Step 1: Fetch a list of car models (using a high limit, e.g., 50)
      const modelsResponse = await axios.get(API_URL, {
        headers: { 'X-Api-Key': API_KEY },
        params: {
          limit: 50, // Get up to 50 models (adjust based on your needs and API quota)
        },
      });

      // Check if the response contains data and set it in state
      const carModels = modelsResponse.data;

      if (carModels && carModels.length > 0) {
        // Step 2: Select a random model from the returned list
        const randomModelIndex = Math.floor(Math.random() * carModels.length);
        const randomCarModel = carModels[randomModelIndex].model;

        console.log(`Selected Random Car Model: ${randomCarModel}`);

        // Step 3: Make a request to get detailed information about the selected model
        const carResponse = await axios.get(API_URL, {
          headers: { 'X-Api-Key': API_KEY },
          params: {
            limit: 1,
            model: randomCarModel, // Use the randomly selected model in the query
          },
        });

        if (carResponse.data && carResponse.data.length > 0) {
          setCar(carResponse.data[0]);
        } else {
          setError('No car data found for the selected model.');
        }
      } else {
        setError('No car models found.');
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching car data:', err);
      setError('Failed to fetch car data. Please try again later.');
      setLoading(false);
    }
  };

  // useEffect to fetch a car when the component mounts
  useEffect(() => {
    fetchRandomCar();
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="car-details-container">
      <h1 className="page-title">Random Car Details</h1>
      {loading && <p>Loading car details...</p>}
      {error && <p className="error-message">{error}</p>}
      {car && (
        <div className="car-details">
          <h2 className="car-name">
            {car.make} {car.model} ({car.year})
          </h2>
          {car.image_url && (
            <img
              src={car.image_url}
              alt={`${car.make} ${car.model}`}
              className="car-image"
            />
          )}
          <p className="car-description">
            <strong>Horsepower:</strong> {car.horsepower || 'N/A'} HP
          </p>
          <p className="car-description">
            <strong>Transmission:</strong> {car.transmission || 'N/A'}
          </p>
          <p className="car-description">
            <strong>Fuel Type:</strong> {car.fuel_type || 'N/A'}
          </p>
        </div>
      )}
      <button className="shuffle-button" onClick={fetchRandomCar} disabled={loading}>
        {loading ? 'Fetching...' : 'Get Another Car'}
      </button>
    </div>
  );
};

export default CarDetails;
