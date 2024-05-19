
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const JobCard = ({ job, handleUser }) => {
  const {
    _id,
    jobTitle,
    user,
    postingDate,
    deadline,
    minSalary,
    maxSalary,
    jobApplicantsNumber,
  } = job || {};

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <div className="w-full mx-auto max-w-sm border border-[#FF4153] px-5 py-5 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
        <div className="flex items-center justify-between">
          <span className="text-xs font-light text-gray-800 ">
            Posting Date: {new Date(postingDate).toLocaleDateString()}
          </span>
          <span className="text-xs font-light text-gray-800 ">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
        </div>

        <div>
          <h1 className="mt-2  text-lg font-semibold text-[#FF4153] ">
            {jobTitle}
          </h1>

          <p className="mt-2 text-sm font-medium text-gray-600 ">
            Salary: ${minSalary} - ${maxSalary}/month
          </p>
          <p className="mt-2 text-sm font-medium text-gray-600 ">
            applicants: {jobApplicantsNumber}
          </p>
          <p className="mt-2 text-sm font-medium text-gray-600 ">
            Employer : {user?.name}
          </p>
        </div>
        <button
          onClick={handleUser}
          className="bg-[#FF4153] w-full text-white px-2 py-1 rounded mt-3"
        >
          <Link to={`/job/${_id}`}>View Details</Link>
        </button>
      </div>
    </motion.div>
  );
};

JobCard.propTypes = {
  job:PropTypes.object.isRequired,
  handleUser:PropTypes.func
}

export default JobCard