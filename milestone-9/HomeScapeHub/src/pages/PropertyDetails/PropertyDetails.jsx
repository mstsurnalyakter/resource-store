import  {useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../../components/Spinner/Spinner';
import { Button } from '@material-tailwind/react';
import { IoLocationSharp } from "react-icons/io5";
import DetailsPageSlider from '../../components/DetailsPageSlider/DetailsPageSlider';
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import useData from '../../hooks/useData';
import { Helmet } from 'react-helmet-async';

const PropertyDetails = () => {
    const [singleData,setSingleData] = useState({});
    const [singleDataLoad,setSingleDataLoad] = useState(true);
    const {id} = useParams();
    const intId = parseInt(id)
    const { data, dataLoading } = useData();




    useEffect(()=>{
        setSingleDataLoad(true)
        const propertyData = data?.find(item => item.id === intId);
        setSingleData(propertyData)
        setSingleDataLoad(false)
    },[data,intId])

    if (dataLoading) {
        return (
          <div className='w-60 mx-auto my-10'>
            <Spinner />
          </div>
        );
    }

    if (singleDataLoad) {
         return (
           <div className="w-60 mx-auto my-10">
             <Spinner />
           </div>
         );
    }

    const {
      estate_title,
      segment_name,
      description,
      price,
      status,
      area,
      location,
      facilities,
    } = singleData || {};



  return (
    <div className="space-y-6">
      <Helmet>
        <title>HomeScapeHub | Property Details</title>
      </Helmet>
      <div className="space-x-4">
        <Button className="bg-[#0073e1] capitalize">{status}</Button>
        <Button className="bg-[#0073e1] capitalize">{segment_name}</Button>
      </div>
      <h2 className="lg:text-4xl text-lg md:text-2xl font-bold">{estate_title}</h2>
      <div className="flex items-center gap-2">
        <IoLocationSharp className="text-red-500 text-xl" />
        <span>{location}</span>
      </div>

      <DetailsPageSlider singleData={singleData} />

      <div className="flex items-center gap-20   text-[#0073e1] font-bold">
        <div className="flex items-center gap-3">
          <BsArrowsFullscreen className="text-2xl" />
          <span className="md:text-3xl text-lg">{area}</span>
        </div>
        <div className="flex items-center gap-3">
          <IoPricetagOutline className="text-2xl" />
          <span className="md:text-4xl text-lg">{price}</span>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="md:text-4xl text-xl  font-bold">Facilities</h3>
        <ul className="list-disc pl-7 text-xl space-y-2">
          {facilities?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-medium">Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

PropertyDetails.propTypes = {}

export default PropertyDetails