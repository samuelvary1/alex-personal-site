import React from 'react';

const carModels = [];

const CarModels = () => {
  return (
    <div>
      <h1>Latest Car Models</h1>
      <div className="car-models">
        {carModels.map((car, index) => (
          <div key={index} className="car-model">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarModels;