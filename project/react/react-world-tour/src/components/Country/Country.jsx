import { useState } from "react";
import "./Country.css";
import CountriesDetail from "../CountryDetail/CountriesDetail";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  //   console.log(country);

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "white" : "black" }}>
        Name: {name.common}
      </h3>
      <img height="200px" width="300px" src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <br />
      <br />
      <button onClick={() => handleVisitedFlags(flags.png)}>Add flag</button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited && <p>I have visited this country</p>}

      <hr />
      <br />
      <CountriesDetail
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
      />
    </div>
  );
};

export default Country;
