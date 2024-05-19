import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import useJobs from "../../hooks/useJobs";
import banner from "../../assets/images/banner/banner.jfif";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DynamicTitle from "../../components/DynamicTitle";

const AllJobs = () => {
  // const {data,isLoading,refetch} = useJobs();
  // console.log(data);
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
   const numberOfPages = Math.ceil(count / itemPerPage);
   const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const {
    data = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-jobs", currentPage,itemPerPage,search],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `${
          import.meta.env.VITE_API_URL
        }/all-jobs?page=${currentPage}&size=${itemPerPage}&search=${search}`
      );
      setJobs(data)
      return data;
    },
  });

  const {
    data: countData = [],
    isLoading: countIsLoading,
    refetch: countRefetch,
    isError: countIsError,
    error: countError,
  } = useQuery({
    queryKey: ["jobs-count", search],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `${import.meta.env.VITE_API_URL}/jobs-count?search=${search}`
      );
      setCount(data.count);
      return data;
    },
  });


  if (isLoading || countIsLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    );
  }


  if (isError || countIsError) {
    toast.error(error.message);
  }

   const handlePaginationButton = (value) => {
     console.log(value);
     setCurrentPage(value);
   };


  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };



  return (
    <div>
      <DynamicTitle pageTitle="All Jobs" />
      <header>
        <div
          className="w-full   object-cover bg-cover h-[140px]"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Find Your Dream Job
              </h1>

              <form onSubmit={handleSearch} className="relative mt-4">
                <input
                  type="text"
                  name="search"
                  placeholder="Enter Job Title"
                  className="py-3 outline-none w-full pl-3 rounded"
                  id="search"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                <button
                  type="submit"
                  className="!absolute bg-[#FF4153] text-white px-3 py-2 right-1 top-1 rounded"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <div className="shadow-md border mx-auto px-1  py-1 lg:py-10 lg:px-10">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left border-b border-[#FF4153] border-opacity-20 text-[#FF4153] ">
                <th className="p-3 "></th>
                <th className="p-3">Title</th>
                <th className="p-3">Posting Date</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">Salary Range</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {jobs?.length > 0 &&
                jobs?.map((job, index) => {
                  const {
                    _id,
                    jobTitle,
                    postingDate,
                    deadline,
                    minSalary,
                    maxSalary,
                  } = job || {};
                  return (
                    <tr
                      key={_id}
                      className="border-b border-opacity-20  dark:border-gray-300 dark:bg-gray-50"
                    >
                      <td className="text-center">{index + 1}</td>
                      <td className="p-3">
                        <p>{jobTitle}</p>
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
                      <td className="p-3">
                        <button className="bg-[#fc5d6d] text-white rounded px-3 py-2">
                          <Link to={`/job/${_id}`}> View Details</Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* pagination section */}

      <div className="flex justify-center mt-16">
        {/* previous button */}
        <button
          onClick={() => handlePaginationButton(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 text-gray-700 dark:text-gray-900 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#FF4153]  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {/* numbers */}
        {pages?.map((btnNum) => (
          <button
            key={btnNum}
            onClick={() => handlePaginationButton(btnNum)}
            className={`hidden ${
              currentPage === btnNum ? "bg-[#FF4153] text-white " : ""
            } px-4 py-2 mx-1 transition-colors duration-300 dark:text-gray-100 transform  rounded-md sm:inline hover:bg-[#FF4153]  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* next button */}
        <button
          onClick={() => handlePaginationButton(currentPage + 1)}
          disabled={currentPage === numberOfPages}
          className="px-4 py-2 mx-1 text-gray-700 dark:text-gray-900 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#FF4153] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllJobs;
