import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
import DynamicTitle from "../../components/DynamicTitle";


const Profile = () => {
     const { user } = useAuth();
  return (
    <div className="flex  min-h-[500px] items-center justify-center">
      <DynamicTitle pageTitle="Profile" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
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
        <div className="flex  min-h-[500px] relative items-center justify-center">
          <Link
            to={`/update-profile`}
            className=" absolute top-20 right-2 transition-colors duration-200 text-white   hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>

          {user && (
            <div
              className="flex border w-80 md:w-96 flex-col py-16 justify-center mx-auto  shadow-md  text-white rounded-xl sm:px-12
        bg-gradient-to-r from-[#328EFF] via-purple-600 to-pink-300 bg-300%  animate-gradient
        "
            >
              <div className="bg-transparent text-black ">
                <img
                  src={user?.photoURL}
                  alt="User Profile Image"
                  className="w-32 h-32 border-[4px] mx-auto rounded-full  dark:bg-gray-500 aspect-square
            bg-white

            "
                />
              </div>
              <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                <div className="my-2 space-y-3">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {user?.displayName || "user name not found"}
                  </h2>
                  <p className=" text-xs sm:text-base dark:text-gray-100 font-medium">
                    {user?.email || "user name not found"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Profile