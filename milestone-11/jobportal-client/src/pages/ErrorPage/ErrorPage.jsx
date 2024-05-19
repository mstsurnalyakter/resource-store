
import { Link } from 'react-router-dom';
import error from "/error.jfif"
import DynamicTitle from '../../components/DynamicTitle';

const ErrorPage = () => {
  return (
    <div>
      <DynamicTitle pageTitle="400 Page" />
      <section className="flex items-center min-h-screen justify-center">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md flex items-center justify-center flex-col">
            <img src={error} className="w-[500px] -mt-16" alt="" />
            <Link
              to={"/"}
              className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#FF4153] ease bg-gradient-to-br from-[#FF4153] to-purple-700 md:w-auto"
            >
              Back to Home Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage