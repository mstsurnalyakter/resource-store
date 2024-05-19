import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";
import banner from "../../assets/images/banner/banner.jfif";
import DynamicTitle from "../../components/DynamicTitle";

import { LuDownload } from "react-icons/lu";


import { useRef } from "react";
import generatePDF from "react-to-pdf";



const AppliedJobs = () => {
  const [filter, setFilter] = useState("");
  const { user } = useAuth();

  const targetRef = useRef();


  const {
    data = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryKey: ["applied-job", user?.email, filter],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/applied-job?email=${
          user?.email
        }&filter=${filter}`,
        { withCredentials: true }
      );
      console.log("inside", data);
      return data;
    },
  });

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

  console.log("outside", data);

  return (
    <div>
      <DynamicTitle pageTitle="Applied Job" />


      <button
        className="bg-[#FF4153] px-3 py-1  text-white  rounded-lg flex items-center gap-4"
        onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
      >
        Download<LuDownload />
      </button>

      <header>
        <div
          className="w-full   object-cover bg-cover h-[160px]"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Applied Jobs
              </h1>
              <div className="mt-3">
                <select
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                  value={filter}
                  name="jobCategory"
                  id="jobCategory"
                  className="border py-2 px-4 rounded-lg "
                >
                  <option value="">Filter By Category</option>
                  <option value="On Site">On Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={targetRef}
        className="shadow-md border mx-auto px-1 py-1 lg:py-10 lg:px-10"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left border-b border-[#FF4153] border-opacity-20 text-[#FF4153] ">
                <th className="p-3"></th>
                <th className="p-3">Title</th>
                <th className="p-3">Job Category</th>
                <th className="p-3">Posting Date</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">Salary Range</th>
                <th className="p-3">Employer</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((job, index) => {
                  const {
                    _id,
                    jobTitle,
                    postingDate,
                    jobCategory,
                    deadline,
                    minSalary,
                    maxSalary,
                    user1,
                  } = job || {};
                  return (
                    <tr
                      key={_id}
                      className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                    >
                      <td className="text-center">{index + 1}</td>
                      <td className="p-3">
                        <p>{jobTitle}</p>
                      </td>
                      <td className="p-3">
                        <p
                          className={`px-1 text-center py-1 ${
                            jobCategory === "On Site" &&
                            "text-blue-800 bg-blue-100"
                          } ${
                            jobCategory === "Remote" &&
                            "text-teal-800 bg-teal-100"
                          } ${
                            jobCategory === "Part-Time" &&
                            "bg-purple-100 text-purple-800"
                          }${
                            jobCategory === "Hybrid" &&
                            "text-pink-800 bg-pink-100"
                          } text-xs  rounded-full`}
                        >
                          {jobCategory}
                        </p>
                      </td>
                      <td className="p-3">
                        <p>{new Date(postingDate).toLocaleDateString()}</p>
                      </td>
                      <td className="p-3">
                        <p>{new Date(deadline).toLocaleDateString()}</p>
                      </td>
                      <td className="p-3">
                        <p>
                          ${minSalary}-${maxSalary}
                        </p>
                      </td>
                      <td className="p-3 space-y-1">
                        <p>{user1?.name}</p>
                        <p>{user1?.email}</p>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
