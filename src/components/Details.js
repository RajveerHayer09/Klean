
import React, { useState } from 'react';
import './details.css';
import { motion } from 'framer-motion';

function Details() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file)); // Create URL for selected image
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true, // Request high accuracy
        timeout: 10000,           // Set a timeout of 10 seconds
      };
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toFixed(7));
          setLongitude(position.coords.longitude.toFixed(7));
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div>
    <p>Enter Your Details Below:</p>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='form'
    >
      <div className='input-container'>
        <label>
          Enter your name:
        </label>
          <input type='text' className='inputBox' />
        
        <label>
          Enter your Phone number:
          </label>
          <input type='text' className='inputBox' />
        
        <div className='locationInputs'>
          <label>
            Your latitude:
            <input
              type='text'
              className='inputBox'
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </label>
          <label>
            Your longitude:
            <input
              type='text'
              className='inputBox'
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </label>
        </div>
      </div>
      <label>
        Upload an image:
        <input type='file' className='inputBox' onChange={handleFileChange} accept='image/*' />
      </label>
      <button className='getLocation' onClick={handleGetLocation}>
        Get My Location
      </button>
      {/* Display selected image file name */}
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      {/* Display the uploaded image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt='Uploaded'
          style={{ maxWidth: '40%', height: 'auto', marginTop: '2px', maxHeight: '30vh' }}
        />
      )}
    </motion.div>
  </div>
  );
}

export default Details;
