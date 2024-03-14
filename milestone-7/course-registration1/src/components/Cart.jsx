import PropTypes from 'prop-types'
import { totalCredits } from '../App';


const Cart = ({carts}) => {
  const credit =  carts.reduce((prev, curr) => prev + curr.credit, 0)
  return (
    <div className="">
      <section className="bg-base-100 shadow-xl py-7 px-2 rounded-xl">
        <section>
          <h3>Credit More Remaining {totalCredits - credit} hr</h3>
        </section>
        <div className="border-t-2 my-2"></div>
        <section className="">
          <h3 className="text-xl mb-3">Course Name</h3>
          <ul className="list-disc space-y-3 pl-5">
            {carts.map((cart) => (
              <li key={cart.id}>{cart.name}</li>
            ))}
          </ul>
        </section>
        <div className="border-t-2 my-2"></div>
        <section>
          <h3>
            Total Credit Hour: {credit}

          </h3>
        </section>
        <div className="border-t-2 my-2"></div>
        <section>
          <h3>
            Total Price: {carts.reduce((prev, curr) => prev + curr.price, 0)} USD
          </h3>
        </section>
        <div className="border-t-2 my-2"></div>
      </section>
    </div>
  );
}

Cart.propTypes = {
  carts:PropTypes.array.isRequired
};

export default Cart