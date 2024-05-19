import React, { useState } from 'react'
import Products from './components/Products'
import Carts from './components/Carts'

const App = () => {
  const [carts,setCarts] = useState([]);

  const handleAddToCart = product =>{
    const isExist = carts.find(cart =>cart.id === product.id);
    if (isExist) {
      alert("Already Exist")
    } else {
      setCarts([...carts,product]);
    }
  }

  const handleRemoveCart = id =>{
    const remainingCart = carts.filter(cart => cart.id !== id);
    setCarts(remainingCart)
    // console.log(id);
  }
  return (
    <div className="container mx-auto p-6 lg:px-16 xl:px-24">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Products handleAddToCart={handleAddToCart} />
        <Carts carts={carts} handleRemoveCart={handleRemoveCart} />
      </section>
    </div>
  );
}

export default App