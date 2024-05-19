import React from 'react'
import Item4 from './Item4';

const PackingList4 = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Sally Ride&lsquo;s Packing List</h2>
      <Item4 name="Space suit" isPacked={true} />
      <Item4 name="Helmet with a golden leaf" isPacked={false} />
      <Item4 name="Photo of Tam" isPacked={true} />
    </div>
  );
}

export default PackingList4