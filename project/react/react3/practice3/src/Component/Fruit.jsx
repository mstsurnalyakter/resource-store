import React from 'react'

const Fruit = () => {
    const products = [
      { title: "Cabbage", isFruit: false, id: 1 },
      { title: "Garlic", isFruit: false, id: 2 },
      { title: "Apple", isFruit: true, id: 3 },
    ];

  return (
    <div>
        {
            products.map((product,index)=> (
              <li key={index} style={{
                color:product.isFruit ? 'magenta':"darkgreen"
              }}>{product.title}</li>
            ))
        }
    </div>
  )
}

export default Fruit