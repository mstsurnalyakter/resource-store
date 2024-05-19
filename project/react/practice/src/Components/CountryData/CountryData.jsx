import React from 'react'
import Data from '../../Data/Data';

const CountryData = (props) => {
    const { country, handleVisited, handleVisitedFlags } = props;
  return (
    <div>
      <small>CountryData: {country.name.common}</small>
      <hr />
      <Data {...props}/>
    </div>
  );
}

export default CountryData