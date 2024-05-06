import React from 'react'
import { Img, Heading } from "../../components";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="flex mb-20 flex-row md:flex-col justify-between items-center w-full p-6 md:gap-10 sm:p-5 bg-white-A700">
        <div className="flex flex-row sm:flex-col justify-between items-center w-[55%] md:w-full ml-[139px] md:ml-5 sm:gap-10">
          <Img
            src="images/img_group_150.svg"
            alt="image"
            className="h-[24px]"
          />
          <div className="flex flex-row gap-10 justify-center items-center w-[53%] sm:w-full">
            <Heading as="h6">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b border-indigo-900_01 !text-indigo-900_01 tracking-[0.12px] text-center"
                    : "!text-indigo-200_01 tracking-[0.12px] text-center"
                }
              >
                Home
              </NavLink>
            </Heading>
            {/* <Heading as="h6">Podcast</Heading> */}
            <Heading as="h6">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b border-indigo-900_01 !text-indigo-900_01 tracking-[0.12px] text-center"
                    : "!text-indigo-200_01 tracking-[0.12px] text-center"
                }
                to={"/bloggerdetails"}
              >
                Blog
              </NavLink>
            </Heading>
            <Heading as="h6">
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b border-indigo-900_01 !text-indigo-900_01 tracking-[0.12px] text-center"
                    : "!text-indigo-200_01 tracking-[0.12px] text-center"
                }
              >
                Login
              </NavLink>
            </Heading>
            {/* <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center"
            >
              About
            </Heading> */}
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b border-indigo-900_01 !text-indigo-900_01 tracking-[0.12px] text-center"
                    : "!text-indigo-200_01 tracking-[0.12px] text-center"
                }
                to={"/contactus"}
              >
                Contact
              </NavLink>
            </Heading>
          </div>
        </div>
        <div>
          <Img
            src="images/img_search.svg"
            alt="search_one"
            className="h-[30px] w-[30px] mr-[139px] md:mr-5"
          />
        </div>
      </header>
    </div>
  );
}

export default Header