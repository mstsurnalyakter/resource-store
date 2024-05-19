

import { AiOutlineDollar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const AppliedJobsCards = () => {
  const jobs = useLoaderData();

   const [appliedJobs, setAppliedJobs] = useState([]);
   const [displayJobs,setDisplayJobs] = useState([]);
   const [open,setOpen] = useState(false)  


   const handleJobsFilter = filter =>{
    if (filter === "all") {
      setDisplayJobs(appliedJobs)
    }else if(filter === 'remote'){
      const remoteJobs = appliedJobs.filter((job) => job.remote_or_onsite === "Remote");
      setDisplayJobs(remoteJobs)
    }else if(filter === "onsite"){
       const onsiteJobs = appliedJobs.filter(
         (job) => job.remote_or_onsite === "Onsite"
       );
       setDisplayJobs(onsiteJobs)
    }

   }

   useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length) {

      // one ways
      // const jobsApplied = [];
      // for (const id of storedJobIds) {
      //     const job = jobs.find(job => job.id === id);
      //     jobsApplied.push(job);
      // }
      const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);

    }

   }, [jobs]);


  return (
    <section className="">
      <div className="container max-w-6xl p-6 mx-auto -mt-16 mb-10 space-y-6 sm:space-y-12">
        {/*  */}
        <details className="dropdown">
        <summary onClick={()=> setOpen(!open)} className="m-1 btn">Filter {open ? <IoIosArrowUp/> : <IoIosArrowDown/>}</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
        {/*  */}
        {displayJobs.map((job) => {
          const {
            id,
            logo,
            job_title,
            company_name,
            remote_or_onsite,
            location,
            job_type,
            salary,
          } = job;
          return (
            <div
              key={id}
              className="card lg:card-side  bg-gradient-to-r flex items-center justify-center from-blue-50 rounded-lg to-purple-50"
            >
              <figure className="bg-white mt-10 ml-10  mb-4 flex items-center justify-center w-60 h-60 rounded-lg">
                <img alt="" className="w-36 h-12" src={logo} />
              </figure>
              <div className="card-body ">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div>
                    <h3 className="flex-1 text-2xl mb-2 font-extrabold text-[#474747] leading-snug">
                      {job_title}
                    </h3>
                    <p className="text-[#757575] text-xl font-semibold mb-4">
                      {company_name}
                    </p>
                    <div className="space-x-3 mb-4">
                      <button
                        type="button"
                        className="px-4 py-2 font-semibold border border-[#7E90FE] border-dashed rounded text-[#7E90FE]"
                      >
                        {remote_or_onsite}
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 font-semibold border border-[#7E90FE] border-dashed rounded text-[#7E90FE]"
                      >
                        {job_type}
                      </button>
                    </div>
                    <div className="flex gap-6 mb-6">
                      <p className="flex items-center gap-2">
                        <CiLocationOn />
                        <span className="text-[#757575] text-xl font-semibold">
                          {location}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <AiOutlineDollar />
                        <span className="text-[#757575] text-xl font-semibold">
                          Salary : {salary}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <Link
                      to={`/job/${id}`}
                      className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* {appliedJobs.length >= 4 && (
          <div
            className={`flex items-center justify-center ${
              dataLength === jobs.length && "hidden"
            }`}
          >
            <button
              onClick={() => setDataLength(jobs.length)}
              href="#_"
              className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
            >
              See All Jobs
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
}

export default AppliedJobsCards