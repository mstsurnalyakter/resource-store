import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const PriceOption = ({option}) => {
    // console.log(option);
    const {name,price,features} = option;
  return (
    <div className="border-2 p-6 space-y-2 border-purple-400 shadow-xl flex flex-col">
      <div className='flex-grow mb-2'>
        <h3
          className="font-bold text-2xl
         text-purple-400  text-center "
        >
          {name}
        </h3>
        <p>Price: {price}</p>
        <ul className="">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1">
              <FaRegCheckCircle className="text-purple-400 text-xl" />
              <li className="text-purple-500 text-xl">{feature}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <button className="btn bg-purple-400 text-white text-center">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default PriceOption