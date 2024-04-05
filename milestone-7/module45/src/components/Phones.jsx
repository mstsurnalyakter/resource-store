import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Phone from './Phone';
import { Audio } from "react-loader-spinner";

const Phones = () => {
    const [phones,setPhones] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios
          .get("https://openapi.programming-hero.com/api/phones?search=iphone")
          .then((data) => setPhones(data.data.data));
          setLoading(false)
    },[])


  return (
    <div className="py-10">
      {loading && (
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      )}
      <h2 className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient text-center py-3">
        Phones:{phones.length}
      </h2>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:px-10 xl:px-24">
        {phones.map((phone) => (
          <Phone phone={phone} key={phone.slug} />
        ))}
      </div>
    </div>
  );
}

export default Phones