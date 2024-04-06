import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

  const [theme, setTheme] = useState('light');
  // const [onData,setOnData] = useState("")

  const handleToggle = e =>{
    if (e.target.checked) {
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme",localTheme)
  },[theme])


  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 fixed z-10 w-full">
      <div className="navbar container mx-auto p-6 lg:px-8 xl:px-10">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 space-y-3 text-xl  shadow bg-base-100 rounded-box w-52 "
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
                }
                to={"/jobs"}
              >
                {/* Statistics */}
                Jobs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
                }
                to={"/applied"}
              >
                Applied Jobs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
                }
                to={"/blogs"}
              >
                Blogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
                }
                to={"/statistics"}
              >
                Statistics
              </NavLink>
              <NavLink
                href="#_"
                className="px-4 py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
              >
                Star Applying
              </NavLink>
            </ul>
          </div>
          <a className="text-3xl text-secondary font-bold lg:text-4xl gap-0">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-300 bg-300% text-transparent bg-clip-text animate-gradient">
              CareerHub
            </span>
          </a>
        </div>
        {/*  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-4 font-bold text-xl menu-horizontal px-1">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
              }
              to={"/jobs"}
            >
              Jobs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
              }
              to={"/applied"}
            >
              Applied Jobs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
              }
              to={"/statistics"}
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#9873FF] font-bold underline" : "font-bold"
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </ul>
        </div>
        {/*  */}
        <div className="navbar-end">
          <a
            href="#_"
            className="px-4 hidden lg:flex py-3 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-[#7E90FE] ease bg-gradient-to-br from-[#7E90FE] to-purple-700 md:w-auto"
          >
            Star Applying
          </a>
          {/* theme controller start*/}
          <label className="flex cursor-pointer ml-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {/* theme controller end */}
        </div>
      </div>
    </div>
  );
}

export default NavBar