
import React ,{ useState }  from 'react'
import { motion } from 'framer-motion';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div>
      <h1 className='heading'> Let's Help To Make This world a better place to live</h1>
      </div>
      <div className='twoparts'>
      <div className='left'>
      This website is focussed on helping people to contibute in cleaning the society.<br></br> This website is kept simple and user friendly so that even common people can use it easily.
      </div>
      <div className='right'>
        Instructions:
        <ul>
          <li>
            Type your name and phone number
          </li>
          <li>
            Click on the "Get Location" button, it gets the current location of the user.
          </li>
          <li>
            Upload an image of the garbage so that we can get a rough idea about the type and amount of garbage.
          </li>
          <li>
            Wait to see your surroundings getting cleaned.
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';
// import './footer.css';

// const Footer = () => {
//   const [isAnimated, setIsAnimated] = useState(false);

//   const handleClick = () => {
//     setIsAnimated(!isAnimated);
//   };

//   return (
//     <footer
//       className='footer'
//       style={{
//         position: 'fixed',
//         bottom: 0,
//         width: '100%',
//         background: '#000',
//         color: '#fff',
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         onExit={{ opacity: 0, y: 100 }}
//       >
//         <Navbar />
//         <a href='/'>Home</a>
//         <a href='/about'>About</a>
//         <a href='/contact'>Contact</a>
//         <button onClick={handleClick}>
//           Toggle Animation
//         </button>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;
