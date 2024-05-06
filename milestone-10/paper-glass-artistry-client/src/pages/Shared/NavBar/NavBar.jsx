import { useEffect, useState } from "react";
import useContextData from "../../../hooks/useContextData";


import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";


function NavList() {
  return (
    <List className="mt-4 items-center mb-6 gap-4 lg:gap-2 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#9856AC] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/all-art-and-craft-items"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#9856AC] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        All Art & craft Items
      </NavLink>

      <NavLink
        to={"/add-craft-item"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#9856AC] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Add Craft Item
      </NavLink>

      <NavLink
        to={"/my-art-craft-list"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#9856AC] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        My Art & Craft List
      </NavLink>
    </List>
  );
}



const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, logout } = useContextData();

    const [theme, setTheme] = useState(() => {
      // Retrieve the theme from local storage or default to "light"
      const storedTheme = localStorage.getItem("theme");
      return storedTheme || "light";
    });

    const handleToggle = () => {
      // Toggle the theme directly when the icon is clicked
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
      // Update local storage and apply the theme
      localStorage.setItem("theme", theme);
      document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="shadow-lg sticky top-0  z-50">
      <Navbar className="mx-auto max-w-7xl  shadow-none rounded-none px-3 lg:px-2 pt-4 mb-6 lg:py-1">
        <div className="flex items-center justify-between">
          <Typography className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center">
            <img
              className="w-20"
              src="https://i.postimg.cc/NjWfVRvm/logo.png"
              alt=""
            />
            <span className="text-lg text-black font-bold md:text-2xl">
              PaperGlassArtistry
            </span>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-4 lg:flex items-center">
            {user && (
              <div className="dropdown w-20 dropdown-end dropdown-hover flex items-center justify-center rounded-full">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-14 rounded-full border-2 border-[#9856AC] p-2">
                    <img
                      alt="profile image"
                      className="w-full"
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/hLmH9kQ/my-image.png"
                      }
                    />
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-44 z-[1] px-5 py-10  border-s-lime-300 shadow menu space-y-3 menu-sm dropdown-content bg-base-100 rounded-box w-96"
                >
                  <p className="text-center text-[#9856AC]">
                    <span className="font-bold ">Name:</span>{" "}
                    {user?.displayName || "user name not found"}
                  </p>
                  <p className="text-center break-words text-[#9856AC]">
                    {" "}
                    <span className="font-bold">Email:</span>{" "}
                    {user?.email || "user email not found"}
                  </p>
                  <button
                    onClick={logout}
                    className=" border flex items-center text-[#9856AC] justify-center border-[#9856AC] px-3 py-1 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            <div>
              {!user && (
                <div className="flex gap-2">
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#9856AC] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
                        : "text-[#131313CC] border border-[#9856AC] px-3 py-1 rounded-lg"
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to={"/register"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#9856AC] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
                        : "text-[#131313CC] border border-[#9856AC] px-3 py-1 rounded-lg"
                    }
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleToggle}
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <div className="flex gap-5">
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                </div>
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          <NavList />

          {user && (
            <div className="dropdown flex  w-10  mb-5 dropdown-hover mx-auto items-center dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-14 rounded-full border-2 border-[#9856AC] p-2">
                  <img
                    alt="profile image"
                    src={
                      user?.photoURL || "https://i.ibb.co/hLmH9kQ/my-image.png"
                    }
                  />
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] px-5 py-10 border border-s-lime-300 shadow menu space-y-1 menu-sm dropdown-content bg-base-100 rounded-box w-64"
              >
                <p className="text-center text-[#9856AC]">
                  <span className="font-bold">Name:</span>{" "}
                  {user?.displayName || "user name not found"}
                </p>
                <p className="text-center break-words text-[#9856AC]">
                  {" "}
                  <span className="font-bold">Email:</span>{" "}
                  {user?.email || "user email not found"}
                </p>
                <button
                  onClick={logout}
                  className="border text-[#9856AC]  mx-auto flex items-center justify-center border-[#9856AC] px-3 py-1 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          <div className="">
            {!user && (
              <div className="flex gap-5 flex-col">
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#9856AC] px-3 py-1 flex items-center mx-auto justify-center  text-white  rounded-lg"
                      : "text-[#131313CC] border flex items-center mx-auto justify-center border-[#9856AC] px-3 py-1 rounded-lg"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to={"/register"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#9856AC] px-3 py-1 flex items-center mx-auto justify-center  text-white  rounded-lg"
                      : "text-[#131313CC] border flex items-center mx-auto justify-center border-[#9856AC] px-3 py-1 rounded-lg"
                  }
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar