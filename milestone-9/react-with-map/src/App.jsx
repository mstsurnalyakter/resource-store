// import GoogleMapReact from "google-map-react";
// import "./App.css";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// function App() {
//   const defaultProps = {
//     center: {
//       lat: 23.6429,
//       lng: 90.4883,
//     },
//     zoom: 11,
//   };
//   return (
//     <>
//       <div style={{ height: "500px", width: "500px" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
//           defaultCenter={defaultProps.center}
//           defaultZoom={defaultProps.zoom}
//         >
//           <AnyReactComponent lat={defaultProps.center.lat} lng={defaultProps.center.lng} text="My Marker" />
//         </GoogleMapReact>
//       </div>
//     </>
//   );
// }

// export default App;

import  { useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./App.css";

const AnyReactComponent = ({ text }) => <div style={{color:"red",fontSize:"3rem"}}>{text}</div>;

function App() {
  const [errorMessage, setErrorMessage] = useState("");

  const defaultProps = {
    center: {
      lat: 23.6429,
      lng: 90.4883,
    },
    zoom: 11,
  };

  const handleApiLoaded = (map, maps) => {
    if (map && maps) {
      // Check if the map is not properly loaded
      if (map.error_message) {
        setErrorMessage(map.error_message);
      }
    }
  };

  return (
    <>
      <div style={{ height: "500px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text={<FaMapMarkerAlt/>}
          />
        </GoogleMapReact>
      </div>
      {errorMessage && (
        <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
      )}
    </>
  );
}

export default App;
