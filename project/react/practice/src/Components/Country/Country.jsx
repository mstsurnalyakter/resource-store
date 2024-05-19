import PropTypes from "prop-types";

import { useState } from "react";
import CountryDetail from "../../CountryDetail/CountryDetail";

const Country = ({ country, handleVisited, handleVisitedFlags }) => {
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
//   console.log(country);
  return (
    <div className={`country ${visited ? "visited" : "no-visited"}`}>
      <h2>name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area: {area}</p>
      <button onClick={() => setVisited(!visited)}>
        {visited ? "Visited" : "Going"}
      </button>
      <span style={{ color: visited ? "#02d702" : "red", marginLeft: "10px" }}>
        {visited
          ? `I have visited ${name.common}`
          : `I want to visit ${name.common}`}
      </span>
      <br />
      <br />
      <button onClick={() => handleVisited(country)}>Mark Visited</button>
      <br />
      <br />
      <button onClick={() => handleVisitedFlags(flags.png)}>Add Flag</button>
      <hr />
      <CountryDetail
        handleVisited={handleVisited}
        handleVisitedFlags={handleVisitedFlags}
        country={country}
      />
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
  handleVisited: PropTypes.func.isRequired,
  handleVisitedFlags: PropTypes.func.isRequired,
};

export default Country;
