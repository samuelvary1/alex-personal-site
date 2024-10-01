// src/components/CarModels.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarModels.css';

const CarModels = () => {
  // State for storing car models, current page, and total pages
  const [carModels, setCarModels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // API endpoint and headers configuration (replace with your API key)
  const API_ENDPOINT = 'https://consumer-reports.p.rapidapi.com/';
  const API_HEADERS = {
    headers: {
      'X-RapidAPI-Key': '02d589ce97msh71dd15d8bd0ebc1p1a8f17jsnbd482ae5f7f4', // Replace with your API key
      'X-RapidAPI-Host': 'consumer-reports.p.rapidapi.com',
    },
  };

  // Fetch car data from the API
  const fetchCarData = async (page) => {
    try {
      const response = await axios.get(API_ENDPOINT, {
        ...API_HEADERS,
        params: {
          make: 'all',
          page,
          pagesize: 10, // Adjust the page size as needed
        },
      });

      // Update state with car data and pagination details
      setCarModels(response.data.modelDetails);
      setTotalPages(response.data.totalPages || 1); // Adjust based on API response
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  // Fetch car data on component mount and page change
  useEffect(() => {
    fetchCarData(currentPage);
  }, [currentPage]);

  // Handle pagination: Go to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle pagination: Go to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="car-models-container">
      <h1 className="page-title">Latest Car Models</h1>
      <div className="car-models-list">
        {carModels.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.imageUrl || '/images/default-car.jpg'} alt={car.name} className="car-image" />
            <div className="car-details">
              <h2 className="car-name">{car.name}</h2>
              <p className="car-description">{car.description || 'No description available.'}</p>
              <p className="car-score"><strong>Score:</strong> {car.score || 'N/A'}</p>
              <p className="car-price"><strong>Price:</strong> {car.price ? `$${car.price}` : 'Price not available'}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button className="pagination-button" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button className="pagination-button" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CarModels;