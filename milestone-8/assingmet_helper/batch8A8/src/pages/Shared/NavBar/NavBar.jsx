import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import  { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CustomSpinner from "../../../components/CustomSpinner/CustomSpinner";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? (
              "text-red-500 font-bold text-xl underline"
            ) : isPending ? (
              <CustomSpinner />
            ) : (
              "flex items-center hover:text-blue-500 transition-colors text-lg"
            )
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/donation"}
          className={({ isActive, isPending }) =>
            isActive ? (
              "text-red-500 font-bold text-xl underline"
            ) : isPending ? (
              <CustomSpinner />
            ) : (
              "flex items-center hover:text-blue-500 transition-colors text-lg"
            )
          }
        >
          Donation
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/statistics"}
          className={({ isActive, isPending }) =>
            isActive ? (
              "text-red-500 font-bold text-xl underline"
            ) : isPending ? (
              <CustomSpinner />
            ) : (
              "flex items-center hover:text-blue-500 transition-colors text-lg"
            )
          }
        >
          Statistics
        </NavLink>
      </Typography>
    </ul>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-7xl py-3 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography> */}
        <img src="/logo.png" alt="" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
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
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
