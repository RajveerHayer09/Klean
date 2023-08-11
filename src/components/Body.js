import React from 'react'
import "./body.css"
import Details from './Details'
import imageSrc from './image.jpg';

function Body() {
  return (
    <div className='bodyContainer'>
      <div className='image'>
        <div className="cropContainer">
          <img src={imageSrc} alt="Image" className="bottomHalfImage" />
          <div className="imageOverlay">
            <h2>After filling the details, click the below button</h2>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className='details'>
        <Details />
      </div>
    </div>
  )
}

export default Body