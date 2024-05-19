// import React, { useEffect, useState } from "react";
// import { AiOutlineDollar } from "react-icons/ai";
// import { CiLocationOn } from "react-icons/ci";
// import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

import Banner from "../components/Banner";
import { useLoaderData, useParams } from "react-router";
import { AiOutlineDollar } from "react-icons/ai";
import { FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.min.css";
import { saveJobApplication } from "../utility/localStorage";


const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id)
  const job = jobs.find(job=> job.id === idInt);


  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,

  } = job;

  const { phone, email, address } = job.contact_information;

  const handleApplyJob = () =>{
    saveJobApplication(idInt)
    toast("You have applied successfully!");

  }


  return (
    <section className="min-h-screen">
      <Banner title={"Job Details"} />
      <div className="grid grid-cols-1 -mt-16 mb-10 lg:grid-cols-3 gap-6 container mx-auto p-6 lg:px-8 xl:px-10">

        <div className="col-span-2 space-y-8">
          <p className="text-[#757575] font-medium">
            <b className="text-[#1A1919] font-extrabold">Job Description:</b>
            {job_description}
          </p>
          <div>
            <p>
              <b>Job Responsibility:</b>
              {job_responsibility}
            </p>
          </div>
          <div className="space-y-3">
            <b>Educational Requirements:</b>
            <p>{educational_requirements}</p>
          </div>
          <div className="space-y-3">
            <b>Experiences:</b>
            <p>{experiences}</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 rounded-lg to-purple-50 p-8 space-y-8">
          <div className="space-y-6">
            <h3 className="text-[#1A1919] text-xl font-extrabold">
              Job Details
            </h3>
            <div className="border-b-2 bg-gradient-to-r from-blue-500 to-purple-700"></div>
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <AiOutlineDollar className="text-[#9873FF] text-xl font-medium" />

                <p>
                  <b>Salary:</b>
                  {salary}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-[#9873FF] text-xl font-medium" />
                <p>
                  <b>Job Title:</b>
                  {job_title}
                </p>
              </div>
            </div>
            <h3 className="text-[#1A1919] text-xl font-extrabold">
              Contact Information
            </h3>
            <div className="border-b-2 bg-gradient-to-r from-blue-500 to-purple-700"></div>
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-[#9873FF] text-xl font-medium" />
                <p>
                  <b>Phone:</b>
                  {phone}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineEmail className="text-[#9873FF] text-xl font-medium" />
                <p>
                  <b>Email: </b>
                  {email}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <CiLocationOn className="text-[#9873FF] text-xl font-medium" />
                <p>
                  <b>Address: </b>
                  {address}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex items-center justify-center"
            }`}
          >
            <div className="flex w-full">
              <button
                onClick={handleApplyJob}
                href="#_"
                className="px-4 py-3 text-xl flex-grow font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default JobDetails;




JobDetails.propTypes = {

}


{/* <div className="dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-12 mx-auto">

		<div className="flex flex-col lg:p-10 dark:divide-gray-300">
			<div className="pt-6 pb-4 space-y-2">
				<span>12 June</span>
				<h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<span>12 June</span>
				<h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<span>12 June</span>
				<h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</div> */}
