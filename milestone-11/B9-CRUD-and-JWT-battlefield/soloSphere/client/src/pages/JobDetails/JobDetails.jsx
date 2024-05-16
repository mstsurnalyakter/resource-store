import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import useContextData from "../../hooks/useContextData";
import { useState } from "react";
import axios from "axios"
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const JobDetails = () => {
  const job = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useContextData();
  const navigate = useNavigate();

   const [startDate, setStartDate] = useState(new Date());

  const {
    _id,
    jobTitle,
    description,
    minPrice,
    maxPrice,
    category,
    deadline,
    buyer,
  } = job || {};

  const jobPostDate = new Date(deadline)

  const handleForm = async (e) => {
    e.preventDefault();


    if (user?.email === buyer?.email) {
      toast.error("Action not permitted.");
      return;
    }

    const form = e.target;
    const price = parseFloat(form.price.value);
    const email = user?.email;
    const comment = form.comment.value;
    const jobId = _id;
    const status = "Pending";

    const deadline =startDate;

    const bidDate = new Date(deadline)

    if (bidDate > jobPostDate) {
      toast.error("Bid date must be less than job post date.");
      return;
    }


    if (price < parseFloat(minPrice)){
       toast.error("offer more or at least equal");
       return
    }


    if (price > parseFloat(maxPrice)){
       toast.error("offer most be less than or equal Maximum Price.");
       return;
    }


    const bidsInfo = {
      jobId,
      price,
      deadline,
      comment,
      jobTitle,
      category,
      email,
      buyer_email:buyer?.email,
      status,
      buyer
    };



    try {
      const { data } = await axiosSecure.post(
        `${import.meta.env.VITE_API_URL}/bids`,
        bidsInfo
      );

      if (data.insertedId) {
          toast.success("Successfully Bid!");
          navigate("/my-bids");
      }

    } catch (error) {
      toast.error(error.response.data);
      e.target.reset();
    }

  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 ">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
          <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
            {category}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {jobTitle}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">{description}</p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Buyer Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                Name: {buyer?.name}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: {buyer?.email}
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src={buyer?.photo} alt="" />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            Range: ${minPrice} - ${maxPrice}
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Place A Bid
        </h2>

        <form onSubmit={handleForm}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                value={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Comment
              </label>
              <input
                id="comment"
                name="comment"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Place Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default JobDetails;
