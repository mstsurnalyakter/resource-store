// import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ card, handleAddToCart }) => {
  const { id, title, price, description, category, image } = card;

  // console.log(card);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl space-y-5">
        <figure>
          <img className="h-60 w-52" src={image} alt={`${title} image`} />
        </figure>
        <div className="card-body space-y-5">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 100)}</p>
          <p className="text-xl font-bold">Price: {price} $</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(card)}
              className="btn btn-primary w-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Card