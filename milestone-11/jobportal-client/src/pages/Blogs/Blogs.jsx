import { Link } from "react-router-dom";
import token from "/Access_vs_refresh_token_blog_thumbnail.webp"
import frameworks from "/Nest.js-vs.-Express.webp"
import code from '/code.jfif'
import { Typography } from "@material-tailwind/react";
import DynamicTitle from "../../components/DynamicTitle";

const Blogs = () => {
  return (
    <div>
      <section className="">
        <DynamicTitle pageTitle="Blogs" />
        <div className="p-6 mx-auto space-y-6 sm:space-y-12">
          <div
            className="block max-w-sm border-2 shadow gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={token}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold ">
                Understanding Access Tokens and Refresh Tokens: A Guide for
                Developers
              </h3>
              <span className="text-xs dark:text-gray-600">May 14, 2024</span>
              <p>
                In today's digital landscape, security is paramount, especially
                when it comes to handling user authentication and authorization.
                Access tokens and refresh tokens are integral parts of this
                process, providing a secure way for clients to access protected
                resources on behalf of users......
              </p>
              <Link className="" to={"/token-blog"}>
                <button className="bg-[#FF4153] px-3 flex items-center mt-4 gap-2 py-2 rounded-md text-white">
                  <span>Read More</span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
              </Link>
            </div>
          </div>

          <div className="grid justify-center grid-cols-1 gap-6  lg:grid-cols-2">
            <div
              className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 shadow"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded  dark:bg-gray-500"
                src={frameworks}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">
                  Comparing Express.js and Nest.js: Choosing the Right Node.js
                  Framework for Your Project
                </h3>
                <span className="text-xs dark:text-gray-600">May 14, 2024</span>
                <Typography variant="small">
                  Express.js and Nest.js are both popular frameworks used for
                  building server-side applications in JavaScript or TypeScript,
                  particularly for web development. While they serve similar
                  purposes, they have distinct features and approaches that
                  cater to different needs and preferences.....
                </Typography>
                <Link className="" to={"/frameworks-blog"}>
                  <button className="bg-[#FF4153] px-3 flex items-center mt-4 gap-2 py-2 rounded-md text-white">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 shadow"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded  dark:bg-gray-500"
                src={code}
              />
              <div className="p-6 space-y-2
              flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold">
                    Job Portal Project Code Explanation
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    May 14, 2024
                  </span>
                  <p>
                    Welcome to the behind-the-scenes journey of creating "Job
                    Portal," a feature-rich platform designed to revolutionize
                    the job-seeking experience. In this blog, we'll unravel the
                    intricate details of how this dynamic website was crafted
                    using the MERN stack (MongoDB, Express.js, React, and
                    Node.js). From setting up the development environment to
                    implementing advanced features like authentication, job
                    listings management, and application handling, we'll explore
                    every aspect of the codebase to provide a comprehensive
                    understanding of the project............
                  </p>
                </div>
                <Link className="" to={"/code-explain"}>
                  <button className="bg-[#FF4153] px-3 flex items-center mt-4 gap-2 py-2 rounded-md text-white">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs