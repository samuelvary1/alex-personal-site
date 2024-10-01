// src/components/FavoritePhotos.js

import React, { useState } from 'react';
import UploadPhotoForm from './UploadPhotoForm';
import './FavoritePhotos.css'; // Import CSS file for styling

const FavoritePhotos = () => {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (newPhoto) => {
    setPhotos([...photos, newPhoto]);
  };

  return (
    <div className="photos-container">
      <h1 className="page-title">Favorite Photos</h1>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={photo.description} className="photo-image" />
            <p className="photo-description">{photo.description}</p>
          </div>
        ))}
      </div>
      <UploadPhotoForm onAddPhoto={addPhoto} />
    </div>
  );
};

export default FavoritePhotos;