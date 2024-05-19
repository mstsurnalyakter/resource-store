import { MdAlarmAdd } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spinner from "../../components/Spinner";
import DynamicTitle from "../../components/DynamicTitle";

const UpdateJob = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const url = `/update-job/${id}`;
  const {
    data: singleData = {},
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryKey: ["update-job"],
    queryFn: async () => {
      const { data } = await axiosSecure(url);
      return data;
    },
  });




  const {
    image,
    jobTitle,
    minSalary,
    maxSalary,
    jobCategory,
    postingDate,
    deadline,
    jobDescription,
    jobApplicantsNumber,
    user:user1,
  } = singleData || {};


  const [startDate1, setStartDate1] = useState(
    new Date(postingDate || new Date())
  );

  const [startDate2, setStartDate2] = useState(
    new Date(deadline || new Date())
  );



    const { mutateAsync } = useMutation({
      mutationKey: ["update-data"],
      mutationFn: async ({jobInfo,id}) => {
        try {
            const { data } = await axios.put(
              `${import.meta.env.VITE_API_URL}/update-job/${id}`,
              jobInfo
            );
            if (data.modifiedCount > 0) {
             toast.success("Successful job update");
              refetch();
            navigate("/my-jobs");
      }
            console.log(data);
            return data;
        } catch (error) {
                toast.error(error.message)
        }
      },
    });


  const onSubmit = async (data) => {
    const {
      image,
      jobTitle,
      minSalary,
      maxSalary,
      jobCategory,
      jobDescription,
    } = data;


    const jobInfo = {
      image,
      jobTitle,
      minSalary,
      maxSalary,
      jobCategory,
      postingDate:startDate1,
      deadline:startDate2,
      jobDescription,
      jobApplicantsNumber: jobApplicantsNumber,
      user: user1,
    };

    try {
    await mutateAsync({jobInfo,id})
    } catch (error) {
      toast.error(error.message);
    }

  };

    if (isLoading) {
      return (
        <div className="flex items-center justify-center mt-10">
          <Spinner />
        </div>
      );
    }

    if (isError) {
      toast.error(error.message);
    }


  return (
    <div className=" border border-[#FF4153]">
      <DynamicTitle pageTitle="Update Job" />
      <div className="shadow-lg  p-5 dark:text-gray-500  dark:bg-[#1a2641d5]">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="flex items-center justify-center text-3xl font-semibold bg-gradient-to-r from-[#e58891] via-purple-400 to-[#FF4153] bg-300% text-transparent bg-clip-text animate-gradient">
            <span className="mr-3 text-[#FF4153]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </span>
            <span className="">Update A Job</span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-8 ">
            <div className="flex-1 space-y-4">
              <div>
                <label className="block mb-2 " htmlFor="image">
                  Image
                </label>
                <input
                  className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
                  type="url"
                  name="image"
                  id="image"
                  placeholder="Image"
                  defaultValue={image}
                  {...register("image", { required: true })}
                />
              </div>

              <div>
                <label className="block mb-2 " htmlFor="jobTitle">
                  Job Title
                </label>
                <input
                  className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
                  type="text"
                  placeholder="Job Title"
                  id="jobTitle"
                  name="jobTitle"
                  defaultValue={jobTitle}
                  {...register("jobTitle", { required: true })}
                />
              </div>

              <div>
                <label className="block mb-2 " htmlFor="minSalary">
                  Minimum Salary
                </label>
                <input
                  className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
                  type="number"
                  placeholder="Minimum Salary"
                  id="minSalary"
                  name="minSalary"
                  defaultValue={minSalary}
                  {...register("minSalary", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2">Posting Date</label>
                <DatePicker
                  disabled
                  selected={startDate1}
                  onChange={(date) => setStartDate1(date)}
                  className="p-2 border-2 rounded-md focus:outline-[#FF4153]  w-full"
                />
              </div>
            </div>
            {/* Right side */}
            <div className="flex-1 space-y-4 mb-4">
              <div>
                <label className="block mb-2 " htmlFor="name">
                  Employer Name
                </label>
                <input
                  className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  id="name"
                  disabled
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block mb-2 " htmlFor="name">
                  Employer Email
                </label>
                <input
                  className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  id="email"
                  disabled
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block mb-2 " htmlFor="minSalary">
                  Maximum Salary
                </label>
                <input
                  className="w-full p-2 border-2 rounded-md focus:outline-[#FF4153]"
                  type="number"
                  defaultValue={maxSalary}
                  placeholder="Maximum Salary"
                  id="maxSalary"
                  name="maxSalary"
                  {...register("maxSalary", { required: true })}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2">Deadline</label>
                <DatePicker
                  required
                  selected={startDate2}
                  onChange={(date) => setStartDate2(date)}
                  className="p-2 border-2 rounded-md focus:outline-[#FF4153]  w-full"
                />
              </div>
            </div>
          </div>

          <select
            name="jobCategory"
            id="jobCategory"
            className="w-full dark:text-gray-900 p-2 border-2 rounded-md focus:outline-[#FF4153]"
            type="text"
            placeholder="Select Job Category"
            defaultValue={jobCategory}
            {...register("jobCategory", { required: true })}
          >
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <div className="mt-4">
            <label className="block mb-2 " htmlFor="jobDescription">
              Description
            </label>

            <textarea
              {...register("jobDescription", { required: true })}
              id="jobDescription"
              name="jobDescription"
              placeholder="Enter Job Description"
              defaultValue={jobDescription}
              className="textarea textarea-bordered dark:text-gray-900 border-2 p-2 rounded-md w-full focus:outline-[#f18691]"
            ></textarea>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded  bg-gradient-to-r from-[#FF4153] via-purple-600 to-[#FF4153] bg-300% text-transparent animate-gradient
              duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
