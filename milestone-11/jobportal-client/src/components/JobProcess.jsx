
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JobProcess = () => {

     const data = [
       {
         icon: "people-outline",
         title: "Create Account",
         description:
           "Sign up and create your account on our platform. Provide necessary details such as your name, email address, and password to register.",
       },
       {
         icon: "search-outline",
         title: "Search Job",
         description:
           " Explore job listings based on your preferences and requirements. Use our search filters to find relevant job opportunities that match your skills and interests.",
       },
       {
         icon: "document",
         title: "Upload Resume",
         description:
           "   Enhance your job application by uploading your resume. Make sureto keep your resume updated with your latest skills, experiences, and qualifications to attract potential employers.",
       },
     ];

  return (
    <div>
      <h2 className="text-center py-5 font-bold text-4xl mx-9">
        Our Job <span className="text-[#FF4153]">Process</span>
      </h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.map((cardData) => (
          <motion.div
            key={cardData.icon}
            animate={{
              scale: [1, 1, 1, 1, 1],
              rotate: [0, 0, 360, 360, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Card className="mt-9  border-2">
              <CardBody className="flex items-center justify-center flex-col space-y-3">
                <div className="text-2xl">
                  <ion-icon name={cardData.icon} className=""></ion-icon>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-[#FF4153]"
                >
                  {cardData.title}
                </Typography>
                <Typography variant="small">{cardData.description}</Typography>
                <Link className="" to={"/all-jobs"}>
                  <button className="bg-[#FF4153] px-3 flex items-center gap-2 py-2 rounded-md text-white">
                    <span>Apply Job</span>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </button>
                </Link>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default JobProcess