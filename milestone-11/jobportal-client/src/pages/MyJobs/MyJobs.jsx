import toast from "react-hot-toast";
import Spinner from "../../components/Spinner";
import useAuth from "../../hooks/useAuth";

import { useMutation, useQuery} from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import DynamicTitle from "../../components/DynamicTitle";



const MyJobs = () => {

  const { user } = useAuth();


  const { data, isLoading, refetch, isError, error } = useQuery({
    queryKey: ["my-jobs", user?.email],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/my-jobs/${user?.email}`
      );
      return data;
    },
  });



const { mutateAsync } = useMutation({
  mutationKey: ["my-job"],
  mutationFn: async ({ id }) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_URL}/my-job/${id}`
        );

        if (response.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Craft Item has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to delete job");
    }
  },
  onError: (error) => {
    console.error("Error during mutation:", error);
  },
});

const handleDelete = async (id) => {
  try {
    await mutateAsync({ id });
  } catch (error) {
    toast.error("Error during deletion:", error);
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
    <div>
      <DynamicTitle pageTitle="My Jobs" />
      
      <div
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
                <th className="p-3">Applicants</th>
                <th className="p-3">Delete</th>
                <th className="p-3">Edit</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((job, index) => {
                  const {
                    _id,
                    jobTitle,
                    postingDate,
                    jobApplicantsNumber,
                    jobCategory,
                    deadline,
                    minSalary,
                    maxSalary,
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
                      <td className="p-3">
                        <p>{jobApplicantsNumber}</p>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => handleDelete(_id)}
                          className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                      <td className="p-3">
                        <Link
                          to={`/update-job/${_id}`}
                          className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </Link>
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

export default MyJobs;
