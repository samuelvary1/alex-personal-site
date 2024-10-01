import React, { useState } from 'react';
import UpdateAccomplishments from './UpdateAccomplishments';

const Accomplishments = () => {
  const [accomplishments, setAccomplishments] = useState([
    { description: "Graduated with a Bachelor's in Computer Science", date: '2018-05-15' },
    { description: 'Completed a marathon', date: '2019-11-03' },
    { description: 'Built a successful React app', date: '2021-09-10' }
  ]);

  const addAccomplishment = (newAccomplishment) => {
    setAccomplishments([...accomplishments, newAccomplishment]);
  };

  return (
    <div>
      <h1>My Accomplishments</h1>
      <ul>
        {accomplishments.map((item, index) => (
          <li key={index}>
            {item.description} - {item.date}
          </li>
        ))}
      </ul>
      <UpdateAccomplishments onAddAccomplishment={addAccomplishment} />
    </div>
  );
};

export default Accomplishments;