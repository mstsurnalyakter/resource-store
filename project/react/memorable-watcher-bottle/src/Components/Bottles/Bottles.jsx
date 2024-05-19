import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromSL } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const loadBottles = async () =>{
            const res = await fetch("bottles.json");
            const data = await res.json();
            setBottles(data)
        }
        loadBottles();
    },[]);

    // load cart from local storage
    useEffect(()=>{
      if (bottles.length) {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id of storedCart) {
          // console.log(id);
          const bottle = bottles.find(bottle =>bottle.id === id);
          if (bottle) {
            savedCart.push(bottle)
          }
        }
        setCart(savedCart)
      }
    },[bottles])

    const handleAddToCart = bottle =>{
      const exit = cart.find((b)=>b.id === bottle.id);
      if (!exit) {
        setCart([...cart, bottle]);
        addToLS(bottle.id)
      }
    }

    const handleRemoveFromCart = id =>{
      // visual cart remove
      const remainingCart = cart.filter(bottle=>bottle.id !== id);
      setCart(remainingCart);
      //remove from LS
      removeFromSL(id)

    }

  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      <section className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          />
        ))}
      </section>
    </div>
  );
}

export default Bottles