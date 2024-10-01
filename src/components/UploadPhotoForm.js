// src/components/UploadPhotoForm.js

import React, { useState } from 'react';
import './UploadPhotoForm.css'; // Import CSS file for styling

const UploadPhotoForm = ({ onAddPhoto }) => {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]); // Capture the uploaded file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo && description) {
      const reader = new FileReader();
      reader.onload = () => {
        const newPhoto = {
          src: reader.result, // Store the photo data as a base64 string
          description,
        };
        onAddPhoto(newPhoto);
        setPhoto(null);
        setDescription('');
      };
      reader.readAsDataURL(photo);
    }
  };

  return (
    <div className="upload-photo-form">
      <h2 className="form-title">Upload a New Photo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Photo:</label>
          <input type="file" className="form-input" onChange={handlePhotoChange} />
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <input
            type="text"
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter photo description"
          />
        </div>
        <button type="submit" className="submit-button">Add Photo</button>
      </form>
    </div>
  );
};

export default UploadPhotoForm;