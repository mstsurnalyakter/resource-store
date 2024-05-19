import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const { name, flags, population,area,cca3 } = country;
    const [visited,setVisited] = useState(false)
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name: {name.common}</h3>
      <img height="150px" width="300px" src={flags.png} alt={flags.alt} />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => setVisited(!visited)}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? (
        <p style={{ color: "green" }}>I have visited this Country.</p>
      ) : (
        <p style={{ color: "red" }}>I want to visit this Country.</p>
      )}
    </div>
  );
}

export default Country;