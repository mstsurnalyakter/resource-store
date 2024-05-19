import React from 'react'
import PropTypes from 'prop-types'
import { totalCredits } from '../App';

const Cart = ({ carts }) => {
  // console.log(carts);
  const credits = carts.reduce((prev, curr) => prev + curr.credit, 0);
  return (
    <div>
      <section className="card bg-base-100 shadow-xl space-y-3 p-4">
        <div>
          <h3>Credit Hour Remain {totalCredits - credits} hr</h3>
        </div>
        <div className="border-b-2"></div>
        <div>
          <h3>Course Name</h3>
          <ol className=" list-decimal pl-2">
            {carts.map((cart) => {
              return <li key={cart.id}>{cart.name}</li>;
            })}
          </ol>
        </div>
        <div className="border-b-2"></div>
        <div>Credit</div>
        <div className="border-b-2"></div>
        <div>
          Total Credit Hour:{credits}

        </div>
        <div className="border-b-2"></div>
        <div>
          Total Price: {carts.reduce((prev, curr) => prev + curr.price, 0)} USD
        </div>
        <div className="border-b-2"></div>
      </section>
    </div>
  );
};

Cart.propTypes = {
  carts:PropTypes.array.isRequired
};

export default Cart