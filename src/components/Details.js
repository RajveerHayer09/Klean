
import React, { useState } from 'react';
import './details.css';
import { motion } from 'framer-motion';

function Details({ onSubmit }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

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

  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('image', selectedFile); // Appended the image file
  
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Data successfully submitted');
        // Handle any success actions here
      } else {
        console.error('Error submitting data');
        // Handle any error actions here
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle any error actions here
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
          <input 
            type='text' 
            className='inputBox'
            value={name}
            onChange={handleNameChange}
          />
        
        <label>
          Enter your Phone number:
          </label>
          <input
            type='text'
            className='inputBox'
            value={phone}
            onChange={handlePhoneChange}
             />
        
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
      <button className='submitBtn' onClick={handleFormSubmit}>Submit</button>
      {/*after clicking this button a post request is sent by the handlesubmitform method*/}
    </motion.div>
  </div>
  );
}

export default Details;
