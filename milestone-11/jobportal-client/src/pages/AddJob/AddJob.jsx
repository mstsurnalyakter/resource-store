import { MdAlarmAdd } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import DynamicTitle from "../../components/DynamicTitle";
import { useNavigate } from "react-router-dom";


const AddJob = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = "https://jobportal-server-ochre.vercel.app/add-jobs";

  const { mutateAsync } = useMutation({
    mutationKey: ["addJob"],
    mutationFn: async (jobInfo) => {
      try {
        const { data } = await axios.post(url, jobInfo,{withCredentials:true
        });

        if (data.insertedId) {
          toast.success("Post Job successfully");
          navigate("/my-jobs");
        }
        return data
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
    const postingDate = startDate1;
    const deadline = startDate2;

    const jobInfo = {
      image,
      jobTitle,
      minSalary,
      maxSalary,
      jobCategory,
      postingDate,
      deadline,
      jobDescription,
      jobApplicantsNumber:0,
      user: {
        email: user?.email,
        name: user?.displayName,
      },
    };

    try {
      await mutateAsync(jobInfo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" border border-[#FF4153]">
      <DynamicTitle pageTitle="Add Job" />
      <div className="shadow-lg  p-5  dark:bg-[#1a2641d5] dark:text-gray-500">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="flex items-center justify-center text-3xl font-semibold bg-gradient-to-r from-[#e58891] via-purple-400 to-[#FF4153] bg-300% text-transparent bg-clip-text animate-gradient">
            <span className="mr-3 text-[#FF4153]">
              <MdAlarmAdd />
            </span>
            <span className="">Post A Job</span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-8 ">
            <div className="flex-1 space-y-6">
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

              <div className="">
                <select
                  name="jobCategory"
                  id="jobCategory"
                  className="w-full p-2  border-2 dark:text-gray-900 rounded-md focus:outline-[#FF4153]"
                  type="text"
                  placeholder="Select Job Category"
                  {...register("jobCategory", { required: true })}
                >
                  <option value="">Select Job Category</option>
                  <option value="On Site">On Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
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
              <div>
                <label className="block mb-2 " htmlFor="name">
                  Applicants
                </label>
                <input
                  className="w-full dark:text-white p-2 border-2 rounded-md focus:outline-[#FF4153]"
                  type="text"
                  name="jobApplicantsNumber"
                  placeholder="0"
                  id="jobApplicantsNumber"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 " htmlFor="jobDescription">
              Description
            </label>

            <textarea
              {...register("jobDescription", { required: true })}
              id="jobDescription"
              name="jobDescription"
              placeholder="Enter Job Description"
              className="textarea textarea-bordered border-2 p-2 rounded-md w-full focus:outline-[#f18691]"
            ></textarea>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded  bg-gradient-to-r from-[#FF4153] via-purple-600 to-[#FF4153] bg-300% text-transparent animate-gradient
              duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJob;
