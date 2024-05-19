import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Country from "../Country/Country";

const Countries = ({ handleMarked, handleFlag }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          throw new Error("Failed to data fetch.");
        }
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {countries.map((country) => (
          <Country
            handleMarked={handleMarked}
            handleFlag={handleFlag}
            key={country.cca3}
            country={country}
          />
        ))}
      </section>
    </div>
  );
};

Countries.propTypes = {
  handleMarked:PropTypes.func.isRequired,
  handleFlag:PropTypes.func.isRequired,
};

export default Countries