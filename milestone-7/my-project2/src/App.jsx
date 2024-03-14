import { useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart"

const App = () => {
  const [carts,setCarts] = useState([]);
  const handleAddToCart = card =>{
    const isExits = carts.find(cart => cart.id === card.id);
    if (isExits) {
      alert("Already exit this card in cart.");
    } else {
      setCarts([...carts, card]);
          console.log(card);
    }

  }
  return (
    <>
      <section className="container mx-auto p-5 lg:px-15 xl:px-24">
        <section className=" grid grid-cols-1 lg:grid-cols-4 gap-5">
          <Cards handleAddToCart={handleAddToCart} />
          <Cart carts={carts}/>
        </section>
      </section>
    </>
  );
}

export default App
