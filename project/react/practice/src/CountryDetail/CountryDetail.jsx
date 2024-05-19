import React from 'react'
import CountryData from '../Components/CountryData/CountryData';

const CountryDetail = ({ country, handleVisited, handleVisitedFlags }) => {
  return (
    <div>
      <small>CountryDetail</small>
      <hr />
      <CountryData
        handleVisited={handleVisited}
        handleVisitedFlags={handleVisitedFlags}
        country={country}
      />
    </div>
  );
};

export default CountryDetail