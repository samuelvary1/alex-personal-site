import React, { useState } from 'react';
import UploadPhotoForm from './UploadPhotoForm';

const FavoritePhotos = () => {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (newPhoto) => {
    setPhotos([...photos, newPhoto]);
  };

  return (
    <div>
      <h1>Favorite Photos</h1>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={photo.description} />
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
      <UploadPhotoForm onAddPhoto={addPhoto} />
    </div>
  );
};

export default FavoritePhotos;
