import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Country = ({ country, handleMarked, handleFlag }) => {
  const { name, flags, area, population } = country;
  const [isVisited, setIsVisited] = useState(false);
  return (
    <div className={`border-2  shadow-xl p-7 lg:p-4 space-y-5 text-center ${isVisited ? 'bg-purple-300':'bg-slate-100'}`}>
      <h2 className="text-2xl font-medium">{name.common}</h2>
      <figure>
        <img
          src={flags.png}
          alt={flags.alt}
          className="border-2 h-32 w-60 mx-auto"
        />
      </figure>
      <div className="space-y-2">
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <section className="space-x-3">
          <button
            onClick={() => setIsVisited(!isVisited)}
            className="btn bg-purple-400 text-white text-xl hover:bg-purple-500"
          >
            {isVisited ? "Visited" : "Going"}
          </button>
          <span
            className={`font-bold ${
              isVisited ? "text-green-600" : "text-red-600"
            }`}
          >
            {isVisited
              ? `I have visited ${name.common}`
              : `I want to visit ${name.common}`}
          </span>
        </section>
        <br />
        <button
          onClick={() => handleMarked(country)}
          className="btn bg-cyan-600 hover:bg-cyan-700 text-white text-xl"
        >
          Mark Visited
        </button>
        <br />
        <button
          onClick={() => handleFlag(flags.png)}
          className="btn bg-green-600 hover:bg-green-700 text-white text-xl"
        >
          Add Flag
        </button>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
  handleMarked: PropTypes.func.isRequired,
  handleFlag: PropTypes.func.isRequired
};

export default Country