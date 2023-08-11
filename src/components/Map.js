import React from 'react'
import { useState ,useEffect } from 'react'
import { GoogleMap , Marker ,LoadScript } from '@react-google-maps/api'



// const containerStyle = {
//     width: '100%',
//     height: '400px',
//   };
  
//   const center = {
//     lat: 0,
//     lng: 0,
//   };

// function Map() {
//     const[userLocation, setUserLocation] = useState{null};

//     useEffect(()=>{
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition((position)=>{
//                 const{ latitute , longitude } = position.coords;
//                 setUserLocation({
//                     lat:latitute,
//                     lng: longitude
//                 });
//             });
//         }


//     },[]);
//   return (
//     <div>Map
//         <LoadScript googleMapsApiKey="hg">
//             <GoogleMap mapContainerStyle={containerStyle} center={userLocation || center} zoom={15}>
//                 { userLocation && <Marker position={ userLocation} title="Your Location" />}
//             </GoogleMap>
//         </LoadScript>   
//     </div>
//   )
// }

// export default Map