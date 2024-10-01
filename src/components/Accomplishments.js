import React from 'react';

const Accomplishments = () => {
  const accomplishments = [
    "Graduated with a Bachelor's in Computer Science",
    "Completed a marathon",
    "Built a successful React app"
  ];

  return (
    <div>
      <h1>My Accomplishments</h1>
      <ul>
        {accomplishments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Accomplishments;