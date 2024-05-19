import React from 'react'

const Data = ({ country, handleVisited, handleVisitedFlags }) => {
  return (
    <div>
        <small>Population from Data: {country.population}</small>
    </div>
  );
};

export default Data