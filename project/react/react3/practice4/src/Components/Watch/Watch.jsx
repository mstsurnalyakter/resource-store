import React from 'react'

const Watch = ({ watch }) => {
  const { brand, price } = watch;
  return (
    <div>
      <h3>Watch:{brand}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Watch