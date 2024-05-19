import PropTypes from "prop-types";
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <section className="cart-container">
        {cart.map((bottle) => (
          <section className="cart" key={bottle.id}>
            <img src={bottle.img} />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </section>
        ))}
      </section>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart