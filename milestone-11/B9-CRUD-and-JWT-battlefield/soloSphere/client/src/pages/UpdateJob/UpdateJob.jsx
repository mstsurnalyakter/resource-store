import { useState } from "react";
import useContextData from "../../hooks/useContextData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateJob = () => {
    const axiosSecure = useAxiosSecure();

     const job = useLoaderData();

      const {
        _id,
        jobTitle,
        description,
        minPrice,
        maxPrice,
        category,
        deadline,
      } = job || {};

    const navigate = useNavigate()

    const {user} = useContextData();
    const [startDate, setStartDate] = useState(new Date(deadline || new Date()));




    const handleUpdate = async e =>{

        e.preventDefault();

        const form = e.target;
         const jobTitle = form.jobTitle.value;
         const email = form.email.value;
        const deadline = startDate;
        const category = form.category.value;
        const minPrice = parseFloat(form.minPrice.value);
        const maxPrice = parseFloat(form.maxPrice.value);
        const description = form.description.value;

        const jobInfo = {
          jobTitle,
          deadline,
          category,
          minPrice,
          maxPrice,
          description,
          buyer:{
            email,
            name:user?.displayName,
            photo:user?.photoURL
          }
        };

       try {
        const {data} = await axiosSecure.put(`/jobs/${_id}`,jobInfo);
        if (data.modifiedCount > 0) {
            toast.success("Successful job update");
            navigate("/my-posted-job");
        }

       } catch (error) {
        toast.error(error.message)
       }


    }


  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Update a Job
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="jobTitle">
                Job Title
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                defaultValue={jobTitle}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
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
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
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

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
                 defaultValue={category}
              >
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="minPrice">
                Minimum Price
              </label>
              <input
                id="minPrice"
                name="minPrice"
                type="number"
                 defaultValue={minPrice}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="maxPrice">
                Maximum Price
              </label>
              <input
                id="maxPrice"
                name="maxPrice"
                type="number"
                 defaultValue={maxPrice}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
               defaultValue={description}
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateJob;
