import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import { baseURL } from "../../utilities/url";
import Spinner from "../../components/Spinner/Spinner";

const ViewDetailsPage = () => {
  const {id} = useParams();
  const [isLoading,setLoading] = useState(false)
  const [item,setItem] = useState({});

  useEffect(()=>{
    setLoading(true)
    fetch(`${baseURL}/paperGlasses/singleItem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false)
      })
      .catch((error) => toast.error(error.message));
  },[id])

  const {
      image,
      item_name,
      subcategory_Name,
      price,
      rating,
      processing_time,
      customization,
      stockStatus,
      short_description,
      user_name,
      user_email,
    } = item || {}

      if (isLoading) {
        return (
          <div className="flex items-center justify-center mt-44">
            <Spinner />
          </div>
        );
      }


  return (
    <div>
      <DynamicTitle pageTitle="View Details Page" />
      <Card className="lg:flex-row flex-col w-full shadow-none">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-2/5 w-full hero  shrink-0 bg-[#1313130D] p-10 rounded-r-none"
        >
          <img
            src={image}
            alt="Item Image"
            className="lg:w-full object-cover"
          />
        </CardHeader>
        <CardBody className="space-y-7">
          <h2 className="font-bold text-4xl text-[#131313] #131313 playfair-display">
            {item_name}
          </h2>
          <div className="flex items-center gap-5">
            <span>By : {user_name}</span>
            <span>Email : {user_email}</span>
          </div>
          <div className="border-b-2 border-[#13131326]"></div>
          <span className="mb-4">{subcategory_Name}</span>
          <div className="border-b-2 border-[#13131326]"></div>
          <span>
            <b className="font-bold">Description:</b> {short_description}
          </span>

          <div className="space-x-3 ">
            <b>Stock Status</b>
            <button className="bg-[#9856AC] py-1 px-3 rounded-md text-white font-medium capitalize">
              {stockStatus}
            </button>
          </div>
          <p className="flex items-center gap-3">
            <span> Price:</span>
            <b>{price}$</b>
          </p>
          <div className="flex items-center gap-3">
            <span>Rating:</span>

            <div className="flex items-center">
              <b>{rating}</b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p className="flex items-center gap-3">
            <span>Customization:</span>
            <b>{customization}</b>
          </p>
          <p className="flex items-center gap-3">
            <span>Processing Time:</span>
            <b>{processing_time}</b>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetailsPage;
