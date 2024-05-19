import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

/**
 *
 * @returns State and event handler exist at same place
 */

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    loadCountries();
  }, []);

  const handleVisitedCountries = (country) => {
    console.log("add this to your visited country");
    // const newVisitedCountries = [...visitedCountries,country]
      // console.log(country);
      const exist = visitedCountries.find((c)=>c === country);
      if (!exist) {
          setVisitedCountries([...visitedCountries, country]);
      }
  };

  const handleVisitedFlags = flag =>{
    const exist = visitedFlags.find(( f => f === flag))
    if (!exist) {
        setVisitedFlags([...visitedFlags,flag])
    }
  }




  return (
    <div>
      <h2>Countries: {countries.length}</h2>

      {/* Visited countries */}
      <section>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
            // <li key={country.cca3}>{array.indexOf(country) === index && country.name.common}</li>
          ))}
        </ul>
      </section>

      <section className="flag-container">
        {visitedFlags.map((flag, index) => (
          <img src={flag} key={index} />
        ))}
      </section>

      {/* display countries */}
      <section className="country-container">
        {countries.map((country) => (
          <Country
            handleVisitedFlags={handleVisitedFlags}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
            key={country.cca3}
          />
        ))}
      </section>
    </div>
  );
};

export default Countries;


//   remove item from an array in a state
// use filter to select all the elements except the one you want to remove
