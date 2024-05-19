import React from 'react'
import PropTypes from 'prop-types'

const Bottle = ({ bottle, handleAddToCart }) => {
  const {
    name,
    price,
    img,
  } = bottle;
//   console.log(bottle);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={`${name} picture`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(bottle)}
              className="btn bg-purple-500 hover:bg-purple-600 text-white text-xl w-full"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Bottle