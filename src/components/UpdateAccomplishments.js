import React, { useState } from 'react';

const UpdateAccomplishments = ({ onAddAccomplishment }) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && date) {
      onAddAccomplishment({ description, date });
      setDescription('');
      setDate('');
    }
  };

  return (
    <div>
      <h2>Add a New Accomplishment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter accomplishment"
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Accomplishment</button>
      </form>
    </div>
  );
};

export default UpdateAccomplishments;
