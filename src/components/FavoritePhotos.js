import React from 'react';

const FavoritePhotos = () => {
  const photos = [
    { src: 'path/to/photo1.jpg', description: 'Photo 1 description' },
    { src: 'path/to/photo2.jpg', description: 'Photo 2 description' }
  ];

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
    </div>
  );
};

export default FavoritePhotos;