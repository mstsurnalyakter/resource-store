import React from 'react'

const Phone = ({phone}) => {
    const {brand,phone_name,slug,image} = phone;
  return (
    <div className="border-2 p-6 space-y-2 border-purple-400 shadow-xl flex flex-col">
      <div className="flex-grow mb-2 space-y-4">
        <div className="w-full bg-slate-100 py-6">
          <img className="bg-slate-100 mx-auto" src={image} alt="" />
        </div>
        <h3
          className="font-bold text-2xl
         text-purple-400  text-center "
        >
          {phone_name}
        </h3>
        <h3
          className="font-bold text-2xl
         text-purple-400  text-center "
        >
          {brand}
        </h3>
        <p
          className="font-bold text-2xl
         text-purple-400  text-center "
        >
          Price: {parseInt(slug.split("-")[1])}
        </p>
      </div>
      <div className="text-center">
        <button className="btn bg-purple-400 text-white text-center">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Phone