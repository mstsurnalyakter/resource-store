import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import logo2 from '/logo2.png'
import { AiFillTwitterCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#282B4A] text-[#e8ded4] py-4">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex justify-center space-x-3 lg:justify-start">
            <div className="self-center flex items-center text-lg md:text-2xl font-semibold">
              <img className="w-10" src={logo2} alt="" />
              <h2>
                Job <span className="text-[#FF4153]">Portal</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-[#e8ded4] text-sm gap-x-4 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3 col-span-2">
            <h3 className="tracking-wide capitalize ">Contact us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <span>
                    987 Andre Plain Suit High Street 838, Lake Chestertown, USA
                  </span>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="tel:+6599887733"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <span>+6599887733</span>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="mailto:paperGlassArtistry@gmail.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <span>jobportal@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide capitalize ">Useful Links</h3>
            <ul className="space-y-5">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/all-jobs"}>All Jobs</Link>
              </li>
              <li>
                <Link to={"/registration"}>Create Account</Link>
              </li>
              <li>
                <Link to={"/add-job"}>Add A Job</Link>
              </li>
              <li>
                <Link to={"/my-jobs"}> My Jobs</Link>
              </li>
              <li>
                <Link to={"/blogs"}> Blogs</Link>
              </li>
              <li>
                <Link to={"/applied-jobs"}>Applied Jobs</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="capitalize">Social media</div>
            <div className="flex flex-wrap items-center justify-start space-x-3 text-2xl">
              <a
                rel="noopener noreferrer"
                href="https://github.com/mstsurnalyakter"
                id="gitHub"
                target="_blank"
                className="flex items-center p-1"
              >
                <FaGithub />
              </a>
              <Tooltip anchorSelect="#gitHub" content="GitHub" />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/mstsurnalyakter"
                id="twitter"
                className="flex items-center p-1"
              >
                <AiFillTwitterCircle />
              </a>
              <Tooltip anchorSelect="#twitter" content="Twitter" />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/mstsurnalyakte/?hl=en"
                id="instagram"
                className="flex items-center p-1"
              >
                <FaInstagram />
              </a>
              <Tooltip anchorSelect="#instagram" content="Instagram" />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://web.facebook.com/mstsurnalyakter"
                id="facebook"
                className="flex items-center p-1"
              >
                <FaFacebook />
              </a>
              <Tooltip anchorSelect="#facebook" content="Facebook" />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/mst-surnaly-akter/"
                id="linkedIn"
                className="flex items-center p-1"
              >
                <FaLinkedinIn />
              </a>
              <Tooltip anchorSelect="#linkedIn" content="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#13131326]"></div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        <p className="text-[#e8ded4]">
          Copyright © {new Date().getFullYear()} - All right reserved by Job{" "}
          <span className="text-[#FF4153]">Portal</span>
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
