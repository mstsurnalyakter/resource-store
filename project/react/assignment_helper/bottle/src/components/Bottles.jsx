
// import PropTypes from 'prop-types'

import { useEffect, useState } from "react"
import Bottle from "./Bottle";
import { addToLS, getStoredCart, removeFromLS } from "../utilities/localStorage";
import Cart from "./Cart";


const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const loadBottles = async () =>{
            try {
                const res = await fetch("bottles.json");
                if (!res.ok) {
                  throw new Error("Failed to data fetch.");
                }

                const data = await res.json();
                setBottles(data);
            } catch (error) {
                console.error(error);
            }
        }
        loadBottles();
    },[])

    // load cart from local storage
    useEffect(()=>{
        if (bottles.length) {
            const storedCart = getStoredCart();
           if (storedCart.length) {
             const saveCart = storedCart.map((id) =>
               bottles.find((bottle) => bottle.id === id)
             );
             setCart(saveCart)
           }
        }
    },[bottles])


    const handleAddToCart = bottle =>{
        const isExist = cart.find(c => c.id=== bottle.id);
        if (isExist) {
            alert('Already Exist this bottles')
        }else{
            setCart([...cart,bottle]);
            addToLS(bottle.id)
        }
    }

    const handleRemoveFromCart = id =>{
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        // remove from LS
        removeFromLS(id)
        console.log('object');
    }


  return (
    <section>
      <h2 className="text-2xl text-center py-3  font-semibold text-pink-600">
        Bottles Available: {bottles.length}
      </h2>
      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart} />
      {/* <div>
        <h2 className="text-center pb-4 text-2xl font-semibold text-cyan-600">Cart: {cart.length}</h2>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          />
        ))}
      </div>
    </section>
  );
}

Bottles.propTypes = {}

export default Bottles