import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiMiniComputerDesktop, HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#0A335B] text-[#e8ded4] py-4">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex justify-center space-x-3 lg:justify-start">
            <div className="self-center flex items-center text-lg md:text-2xl font-semibold">
              <img
                className="w-20"
                src="https://i.ibb.co/rbZyyC8/logo2.png"
                alt=""
              />
              <h3>HomeScapeHub</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-4 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3 col-span-2">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Contact us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  <HiOutlineBuildingOffice className="text-4xl" />
                  <span>
                    3735 Commercial St SE Salem, Corner with Sunny Boulevard,
                    3735 Commercial OR 97302
                  </span>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="tel:(305) 777-8886"
                >
                  <FaPhoneAlt className="text-xl" />
                  <span>(305) 777-8886</span>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="mailto: homeScapeHub@gmail.com"
                >
                  <MdOutlineMailOutline className="text-xl" />
                  <span>homeScapeHub@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  <HiMiniComputerDesktop className="text-xl" />
                  <span>HomeScapeHub</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <ul className="space-y-5">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/register"}>Create Account</Link>
              </li>
              <li>
                <Link to={"/update-profile"}>Update Profile</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-900">Social media</div>
            <div className="flex flex-wrap items-center justify-start space-x-3 text-2xl">
              <a
                rel="noopener noreferrer"
                href="https://github.com/mstsurnalyakter"
                title="GitHub"
                target="_blank"
                className="flex items-center p-1"
              >
                <FaGithub />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/mstsurnalyakter"
                title="Twitter"
                className="flex items-center p-1"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/mstsurnalyakte/?hl=en"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://web.facebook.com/mstsurnalyakter"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/mst-surnaly-akter/"
                title="LinkedIn"
                className="flex items-center p-1"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#13131326]"></div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span>HomeScapeHub</span>
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
