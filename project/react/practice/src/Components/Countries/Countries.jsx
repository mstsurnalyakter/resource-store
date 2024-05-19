import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
import '../Country/Country.css'


const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visited,setVisited] = useState([]);
  const [visitedFlags,setVisitedFlags] = useState([]);
    useEffect(()=>{
    const loadCountries = async () =>{
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data)
    }
    loadCountries();
  },[])

  const handleVisited = country =>{
    const exist = visited.find(c=> c === country);
    {!exist && setVisited([...visited, country])}
  }

  const handleVisitedFlags = flag =>{
    const exit = visitedFlags.find(f=>f === flag)
    {!exit && setVisitedFlags([...visitedFlags, flag])}
  }
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <section>
        <h5>Visited Countries: {visited.length}</h5>
        <ul>
          {visited.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </section>
      <section>
        <section className="flag-container">
          {
            visitedFlags.map((flag,index)=><img src={flag} key={index}/>)
          }
        </section>

      </section>
      <section className="country-container">
        {countries.map((country) => (
          <Country
            handleVisited={handleVisited}
            handleVisitedFlags={handleVisitedFlags}
            key={country.cca3}
            country={country}
          />
        ))}
      </section>


    </div>
  );
}

export default Countries