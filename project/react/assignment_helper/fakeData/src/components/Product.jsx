import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ product, handleAddToCart }) => {
  const { id, title, price, description, category, image } = product;
  // console.log(product);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-32 h-36" src={image} alt="Shoes" />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 100)}</p>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(product)}
              className="btn w-full bg-purple-500 hover:bg-purple-700 text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Product