import React, { useState } from 'react';

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
    <div>
      <h2>Upload a New Photo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Photo:</label>
          <input type="file" onChange={handlePhotoChange} />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter photo description"
          />
        </div>
        <button type="submit">Add Photo</button>
      </form>
    </div>
  );
};

export default UploadPhotoForm;