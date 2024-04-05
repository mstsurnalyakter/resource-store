import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const navLinks = (
      <>
        <NavLink
          className={({ isActive}) =>
            isActive ? "underline bg-red-500 px-3 py-2 text-white" :  ""
          }
          to={"/"}
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            isActive ? "underline bg-red-500 px-3 py-2 text-white" :  ""
          }
          to={"/login"}
        >
          {" "}
          Login
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            isActive ? "underline bg-red-500 px-3 py-2 text-white" :  ""
          }
          to={"/register"}
        >
          {" "}
          Register
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            isActive ? "underline bg-red-500 px-3 py-2 text-white" :  ""
          }
          to={"/register-hero"}
        >
          {" "}
          Register Hero
        </NavLink>
      </>
    );
  return (
    <div>
      <div className="navbar bg-base-200 mb-52">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu space-x-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                navLinks
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Email Auth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-5 items-center menu-horizontal px-1">
         {
            navLinks
         }
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
}

NavBar.propTypes = {}

export default NavBar