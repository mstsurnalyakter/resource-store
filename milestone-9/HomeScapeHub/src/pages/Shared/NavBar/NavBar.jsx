import  { useEffect, useState } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,

} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import {  NavLink } from "react-router-dom";
import useContextData from "../../../hooks/useContextData";


function NavList() {
  return (
    <List className="mt-4 items-center mb-6 gap-4 lg:gap-2 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#0073e1] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#0073e1] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Profile
      </NavLink>

      <NavLink
        to={"/update-profile"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#0073e1] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Update Profile
      </NavLink>

      <NavLink
        to={"/about-us"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#0073e1] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        About Us
      </NavLink>
    </List>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const {user,logout} = useContextData();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="shadow-lg sticky top-0 z-50">
      <Navbar className="mx-auto max-w-7xl shadow-none rounded-none px-3 lg:px-2 pt-4 mb-6 lg:py-1">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center">
            <img
              className="w-20"
              src="https://i.ibb.co/rbZyyC8/logo2.png"
              alt=""
            />
            <span className="text-lg font-bold md:text-2xl">HomeScapeHub</span>
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
                  <div className="w-14 rounded-full border-2 border-[#0073e1] p-2">
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
                  <p className="text-center">
                    <span className="font-bold">Name:</span>{" "}
                    {user?.displayName || "user name not found"}
                  </p>
                  <p className="text-center break-words">
                    {" "}
                    <span className="font-bold">Email:</span>{" "}
                    {user?.email || "user email not found"}
                  </p>
                </div>
              </div>
            )}

            <div className="">
              {user ? (
                <button
                  onClick={logout}
                  className="text-[#131313CC] border flex items-center justify-center border-[#0073e1] px-3 py-1 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#0073e1] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
                      : "text-[#131313CC] border border-[#0073e1] px-3 py-1 rounded-lg"
                  }
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        <Collapse open={openNav}>
          <NavList />

          {user && (
            <div className="dropdown flex  w-10 text-black mb-5 dropdown-hover mx-auto items-center dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-14 rounded-full border-2 border-[#0073e1] p-2">
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
                className="mt-3 z-[1] px-5 py-10 border border-s-lime-300 shadow menu space-y-3 menu-sm dropdown-content bg-base-100 rounded-box w-64"
              >
                <p className="text-center">
                  <span className="font-bold">Name:</span>{" "}
                  {user?.displayName || "user name not found"}
                </p>
                <p className="text-center break-words">
                  {" "}
                  <span className="font-bold">Email:</span>{" "}
                  {user?.email || "user email not found"}
                </p>
              </div>
            </div>
          )}

          <div className="">
            {user ? (
              <button
                onClick={logout}
                className="text-[#131313CC] border mx-auto flex items-center justify-center border-[#0073e1] px-3 py-1 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#0073e1] px-3 py-1 flex items-center mx-auto justify-center  text-white  rounded-lg"
                    : "text-[#131313CC] border flex items-center mx-auto justify-center border-[#0073e1] px-3 py-1 rounded-lg"
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
