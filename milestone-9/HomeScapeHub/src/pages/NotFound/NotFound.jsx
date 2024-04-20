import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const NotFound = () => {

  return (
    <>
      <Helmet>
        <title>HomeScapeHub | Not Found</title>
      </Helmet>
      <section className="flex items-center min-h-screen justify-center">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl">
              <span className="sr-only">Error</span>
              <span className="bg-gradient-to-r from-[#328EFF] via-purple-600 to-pink-300 bg-300% text-transparent bg-clip-text animate-gradient">
                404
              </span>
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn&apos;t find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But don&apos;t worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to={"/"}
              className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
            >
              Back to Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound