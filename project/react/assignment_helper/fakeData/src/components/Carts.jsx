import React from 'react'
import PropTypes from 'prop-types'

const Carts = ({ carts, handleRemoveCart }) => {
  return (
    <div>
      <section className="card  bg-base-100 shadow-xl p-2">
        <h3>Cart</h3>
        <table className="table-auto border w-full text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) => {
              return (
                <tr key={cart.id}>
                  <th>{index + 1}</th>
                  <th>{cart.title}</th>
                  <th>{cart.price}</th>
                  <th>
                    <button onClick={() =>handleRemoveCart(cart.id)} className="btn">
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

Carts.propTypes = {
  carts: PropTypes.array.isRequired,
  handleRemoveCart: PropTypes.func.isRequired,
};

export default Carts