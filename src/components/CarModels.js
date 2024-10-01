import React from 'react';

const carModels = [
  { name: '2024 Tesla Model S', description: 'Electric luxury sedan', image: 'path/to/tesla.jpg' },
  { name: '2024 Ford Mustang', description: 'High-performance sports car', image: 'path/to/mustang.jpg' }
];

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