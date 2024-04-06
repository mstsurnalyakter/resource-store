import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const [jobs,setJobs] = useState([]);
  const [dataLength,setDataLength] = useState(4);

  useEffect(()=>{
    const loadData = async () =>{
      try {
        const res = await fetch("./data/jobs.json");
        if (!res.ok) {
          throw new Error("Fail to data fetch!")
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  },[])



  return (
    <section className="py-6  mb-10">
      <div className="container p-6 mx-auto space-y-8 mb-10">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <p className="font-serif text-sm text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8  lg:grid-cols-2">
          {jobs.slice(0, dataLength).map((job) => {
            const {
              id,
              logo,
              job_title,
              company_name,
              remote_or_onsite,
              location,
              job_type,
              salary,
              // job_description,
              // job_responsibility,
              // educational_requirements,
              // experiences,
              // contact_information,
              // phone,
              // email,
              // address,
            } = job;
            return (
              <article
                key={id}
                className="flex flex-col bg-gradient-to-r from-blue-50 rounded-lg to-purple-50 p-10"
              >
                <figure className="bg-gradient-to-r from-blue-100 mb-4 flex items-center justify-center to-purple-100 bg-opacity-10 w-28 h-20 rounded-lg">
                  <img alt="" className="w-20 h-10" src={logo} />
                </figure>
                <div className="flex flex-col">
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
                  <div>
                    <Link
                      to={`/job/${id}`}
                      className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className={`flex items-center justify-center ${dataLength === jobs.length && 'hidden'}`}>
        <button
          onClick={() => setDataLength(jobs.length)}
          href="#_"
          className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
        >
          See All Jobs
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
