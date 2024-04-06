
import userImage from "../assets/images/user.png";
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 w-full mb-10">
      <div className="container flex flex-col justify-center p-6  mx-auto lg:pt-10  lg:pb-1 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Step Closer To Your {" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-300 bg-300% text-transparent bg-clip-text animate-gradient">
              Dream Job
            </span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#_"
              className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={userImage}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero