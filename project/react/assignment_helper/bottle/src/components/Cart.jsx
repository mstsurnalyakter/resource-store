
import PropTypes from 'prop-types'

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2 className="text-center pb-4 text-2xl font-semibold text-cyan-600">
        Cart: {cart.length}
      </h2>
      <div className="flex gap-4 items-center justify-center mb-5 border-2 py-5 bg-base-100 shadow-xl">
        {cart.map((bottle) => (
          <div key={bottle.id} className=' space-y-3'>
            <img className="w-20" src={bottle.img} />
            <button onClick={()=>handleRemoveFromCart(bottle.id)} className='btn bg-red-600 text-white'>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart