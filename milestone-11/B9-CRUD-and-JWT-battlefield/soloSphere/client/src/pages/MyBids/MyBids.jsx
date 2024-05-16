import { useEffect, useState } from "react";
import useContextData from "../../hooks/useContextData";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBids = () => {
    const axiosSecure = useAxiosSecure();

  const [bids,setBids] = useState([])
  const { user } = useContextData();


  // const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // const url = `http://localhost:5000/my-bids/${user?.email}`;
    const url = `/my-bids/${user?.email}`;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axiosSecure(url);
        setBids(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [url,axiosSecure]);

 const handleStatus = async (id, status) => {
   try {
     const { data } = await axios.patch(
       `${import.meta.env.VITE_API_URL}/bid/${id}`,
       { status }
     );
     if (data?.modifiedCount > 0) {
       toast.success("Status update successfully");
     }
     console.log(data);
   } catch (error) {
     toast.error(error.message);
   }
 };


  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Bids</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {bids?.length} Bid
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
                        <span>Price</span>
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
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {bids?.length > 0 &&
                    bids?.map((bid) => {
                       const {
                         _id,
                         jobTitle,
                         status,
                        price,
                         category,
                         deadline,
                       } = bid || {};
                       return (
                         <tr key={_id}>
                           <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                             {jobTitle}
                           </td>

                           <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                             {new Date(deadline).toLocaleDateString()}
                           </td>

                           <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                             ${price}
                           </td>
                           <td className="px-4 py-4 text-sm whitespace-nowrap">
                             <div className="flex items-center gap-x-2">
                               <p
                                 className={`px-3 py-1  ${
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
                           <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                             <div
                               className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                                 status === "Pending" &&
                                 "bg-yellow-100/60 text-yellow-500"
                               } ${
                                 status === "In Progress" &&
                                 "bg-blue-100/60 text-blue-500"
                               } ${
                                 status === "Complete" &&
                                 "bg-emerald-100/60 text-emerald-500"
                               } ${
                                 status === "Rejected" &&
                                 "bg-red-100/60 text-red-500"
                               }`}
                             >
                               <span
                                 className={`h-1.5 w-1.5 rounded-full ${
                                   status === "Pending" && "bg-yellow-500"
                                 } ${
                                   status === "In Progress" && "bg-blue-500"
                                 } ${status === "Complete" && "bg-green-500"} ${
                                   status === "Complete" && "bg-green-500"
                                 } ${status === "Rejected" && "bg-red-500"} `}
                               ></span>
                               <h2 className="text-sm font-normal ">
                                 {status}
                               </h2>
                             </div>
                           </td>
                           <td className="px-4 py-4 text-sm whitespace-nowrap">
                             <button
                               disabled={status !== "In Progress"}
                               onClick={() => handleStatus(_id,status, "Complete")}
                               title="Mark Complete"
                               className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed"
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
                                   d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                                 />
                               </svg>
                             </button>
                           </td>
                         </tr>
                       );

                    })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBids;
