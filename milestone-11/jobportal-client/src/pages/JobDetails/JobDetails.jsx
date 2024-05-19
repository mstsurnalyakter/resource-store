import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";
import  { useState } from 'react';
import axios from 'axios';
// import { useMutation } from '@tanstack/react-query';
import useAuth from "../../hooks/useAuth";
import DynamicTitle from "../../components/DynamicTitle";

const JobDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [resumeLink, setResumeLink] = useState("");


  const url = `/job/${id}`;
  const { data, isLoading, refetch, isError, error } = useQuery({
    queryKey: ["job"],
    queryFn: async () => {
      const { data } = await axiosSecure(url);
      return data;
    },
  });

const url2 = "https://jobportal-server-ochre.vercel.app/apply-job";


  const { mutateAsync } = useMutation({
    mutationKey: ["apply-job"],
    mutationFn: async (applicationData) => {
      try {
        const { data } = await axios.post(url2, applicationData);

        if (data.insertedId) {
          toast.success("Application submitted successfully!");
          refetch()
          navigate("/applied-jobs");

        }
      } catch (error) {
        toast.error(error.response.data)
      }
    },
  });

     const handleApply = async () => {
       const {
         _id,
         image,
         jobTitle,
         minSalary,
         maxSalary,
         jobCategory,
         postingDate,
         deadline,
         jobDescription,
         user: user1,
       } = data || {};
       try {
         const applicationData = {
           jobId: _id,
           userName: user?.displayName || "",
           userEmail: user?.email || "",
           resumeLink,
           image,
           jobTitle,
           minSalary,
           maxSalary,
           jobCategory,
           postingDate,
           deadline,
           jobDescription,
           user1,
         };


         await mutateAsync(applicationData);
       } catch (error) {
         console.error("Error handling application:", error);
       }
     };




  const openApplicationModal = () => {
    const isDeadlinePassed = new Date(data?.deadline) < new Date();
    const isEmployer = data?.user?.email === user?.email;

    if (isEmployer) {
      return toast.error("You are the employer of this job.");
    }

    if (isDeadlinePassed) {
      return toast.error(
        "The deadline for this job has passed. You cannot apply."
      );
    }



    Swal.fire({
      title: "Submit your Resume Link",
      html: `
      <input type="text" placeholder="Your Name" class="swal2-input" value="${user?.displayName}" readonly />
      <input type="email" placeholder="Your Email" class="swal2-input" value="${user?.email}" readonly />
      <input type="url" id="resumeLinkInput" placeholder="Enter resume link" class="swal2-input" />
    `,
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const resumeLink = document.getElementById("resumeLinkInput").value;
        setResumeLink(resumeLink);
        if (!resumeLink) {
          Swal.showValidationMessage("Please provide a valid resume link.");
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        handleApply();
      }
    });
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
    user: user1,
  } = data || {};



  return (
    <div>
      <header className="">
        <DynamicTitle pageTitle="Job Details" />
        <div className="h-[350px]">
          <img src={image} alt="" className="w-full h-full" />
        </div>
      </header>

      <div className="shadow-md dark:bg-gray-300 border space-y-5 mx-auto px-8 py-8 lg:py-10 lg:px-10">
        <h2 className="text-4xl font-medium">{jobTitle}</h2>
        <div className="flex gap-3">
          <p>
            <b>Employer Name:</b> {user1?.name}
          </p>
          <p>
            <b>Employer Email:</b> {user1?.email}
          </p>
        </div>
        <p>
          <b>Applicants:</b> {jobApplicantsNumber}
        </p>
        <p>
          <b>Type:</b> {jobCategory}
        </p>
        <p>
          <b>Salary Range:</b> ${minSalary}-${maxSalary}
          <span className="text-sm">/month</span>
        </p>
        <p>
          <b>Posting Date:</b> {new Date(postingDate).toLocaleDateString()}
        </p>
        <p>
          <b>Deadline:</b> {new Date(deadline).toLocaleDateString()}
        </p>
        <p>
          <b>Description:</b> {jobDescription}
        </p>
        <button
          onClick={openApplicationModal}
          className="px-4 w-full py-2 mt-4 rounded  bg-gradient-to-r from-[#FF4153] via-purple-600 to-[#FF4153] bg-300% text-transparent animate-gradient
              duration-200 text-white cursor-pointer font-semibold"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default JobDetails