import React ,{useState }from 'react'
import "./body.css"
import Details from './Details'
import imageSrc from './image.jpg';

function Body() {
  const handleFormSubmit = (formData) => {
    // Handle the data submission or display it as needed
    console.log(formData);
  };
  return (
    <div className='bodyContainer'>
      <div className='image'>
        <div className="cropContainer">
          <img src={imageSrc} alt="Image" className="bottomHalfImage" />
          <div className="imageOverlay">
            <h2>After filling the details, click the submit button</h2>
          </div>
        </div>
      </div>
      <div className='details'>
      <Details onSubmit={handleFormSubmit} />
      </div>
    </div>
  )
}

export default Body