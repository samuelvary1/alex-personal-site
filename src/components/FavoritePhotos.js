import React, { useState, useEffect } from 'react';
import './FavoritePhotos.css';

const FavoritePhotos = () => {
  const photos = [
    {
      src: '/images/mountain_pilot.png',
      description: 'Mountain Pilot',
    },
    {
      src: '/images/dinosaur_ariya.png',
      description: 'Dinosaur Ariya',
    },
    {
      src: '/images/underwater_ariya.png',
      description: 'Underwater Ariya',
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (lightboxIndex !== null) {
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % photos.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    }
  };

useEffect(() => {
  const handleKeyDown = (e) => {
    if (lightboxIndex !== null) {
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % photos.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [lightboxIndex, photos.length]);

  return (
    <div className="photos-container">
      <h1 className="page-title">Favorite Photos</h1>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item" onClick={() => setLightboxIndex(index)}>
            <img src={photo.src} alt={photo.description} className="photo-image" />
            <div className="overlay">
              <p className="photo-description">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox">
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>×</button>
          <button
            className="lightbox-arrow left"
            onClick={() => setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)}
          >
            ‹
          </button>
          <img
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].description}
            className="lightbox-image"
          />
          <button
            className="lightbox-arrow right"
            onClick={() => setLightboxIndex((lightboxIndex + 1) % photos.length)}
          >
            ›
          </button>
          <p className="lightbox-caption">{photos[lightboxIndex].description}</p>
        </div>
      )}
    </div>
  );
};

export default FavoritePhotos;