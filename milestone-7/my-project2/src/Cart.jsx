// import React from 'react'
// import PropTypes from 'prop-types'

const Cart = ({ carts }) => {
  return (
    <section>
      <div className="bg-base-100 shadow-xl p-5 rounded-2xl">
        <h2>Cart</h2>
        <div className="flex justify-between">
          <h3>Name</h3>
          <h3>Price</h3>
        </div>
      </div>
    </section>
  );
};

// Cart.propTypes = {}

export default Cart