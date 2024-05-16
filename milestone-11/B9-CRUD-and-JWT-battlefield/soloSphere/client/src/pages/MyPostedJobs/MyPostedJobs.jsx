import Spinner from "../../components/Spinner";
import useMyPostedJobs from "../../hooks/useMyPostedJobs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useContextData from "../../hooks/useContextData";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const MyPostedJobs = () => {

  const axiosSecure = useAxiosSecure();

  const { user } = useContextData();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `/myJobs/${user?.email}`;
  // const url = `http://localhost:5000/jobs?email=${user?.email}`;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axiosSecure(url);
        setJobs(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [axiosSecure,url]);

  const handleDelete =  id =>{

     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     }).then((result) => {
       if (result.isConfirmed) {
         fetch(`${import.meta.env.VITE_API_URL}/jobs/${id}`, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.deletedCount > 0) {
               Swal.fire({
                 title: "Deleted!",
                 text: "Craft Item has been deleted.",
                 icon: "success",
               });
               const remaining = jobs.filter((job) => job._id !== id);
               setJobs(remaining);
             }
           })
           .catch((error) => toast.error(error.message));
       }
     });

  }



  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Posted Jobs</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {jobs?.length}
          Jobs
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price Range</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Description
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {
                    jobs?.length > 0 && jobs?.map(job=>{
                      const {
                        _id,
                        jobTitle,
                        description,
                        minPrice,
                        maxPrice,
                        category,
                        deadline,
                      } = job || {};
                      return (
                        <tr key={_id}>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {jobTitle}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {new Date(deadline).toLocaleDateString()}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            ${minPrice}-${maxPrice}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p
                                className={`px-3 py-1 ${
                                  category === "Web Development" &&
                                  "text-blue-500 bg-blue-100/60"
                                } ${
                                  category === "Graphics Design" &&
                                  "text-emerald-500 bg-emerald-100/60"
                                } ${
                                  category === "Digital Marketing" &&
                                  "text-pink-500 bg-pink-100/60"
                                } text-xs  rounded-full`}
                              >
                                {category}
                              </p>
                             
                            </div>
                          </td>
                          <td
                            title=""
                            className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                          >
                            {description}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
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

                              <Link
                                to={`/update/${_id}`}
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
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPostedJobs;
