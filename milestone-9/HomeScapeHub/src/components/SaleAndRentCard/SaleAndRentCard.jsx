
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SaleAndRentCard = ({ item }) => {

  return (
    <div>
      <Card className="mx-auto relative overflow-hidden min-h-[495px] flex flex-col">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none object-cover h-52"
        >
          <figure className="object-cover w-full  rounded h-64">
            <img
              className="w-full h-full"
              src={item?.image[0]}
              alt={`${item?.estate_title} image`}
            />
          </figure>
        </CardHeader>
        <CardBody className="flex-grow space-y-3">
          <button className="bg-[#0073e1] absolute top-40 right-2 text-white px-3 py-1 rounded-md">
            {item?.status}
          </button>
          <Typography variant="h6" color="blue-gray">
            {item?.estate_title}
          </Typography>
          <Typography variant="h6" className="text-[#0073e1]">
            {item?.price}
          </Typography>
          <Typography variant="small" color="gray" className="mt-3 font-normal">
            {item?.description.slice(0, 100)}...
          </Typography>
          <div className="flex items-center gap-3 mt-4  text-[#0073e1]">
            <BsArrowsFullscreen className="text-sm" />
            <span className="">{item?.area}</span>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Button className="bg-[#0073e1] capitalize w-full">
            <Link to={`/property-details/${item?.id}`}>View Property”</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

SaleAndRentCard.propTypes = {
    item:PropTypes.object.isRequired
}

export default SaleAndRentCard