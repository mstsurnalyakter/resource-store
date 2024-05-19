import CountryData from "../CountryData/CountryData";

const CountriesDetail = (props) => {
//     const {
//   country,
//   handleVisitedCountries,
//   handleVisitedFlags,
// } = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
      /> */}
      <CountryData {...props}/>
    </div>
  );
}

export default CountriesDetail