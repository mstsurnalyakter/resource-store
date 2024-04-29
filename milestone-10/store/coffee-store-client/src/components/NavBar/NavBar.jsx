import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="bg-sky-200 space-x-5 flex items-center justify-center text-2xl p-5 font-semibold">
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 border-pink-600" : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 border-pink-600" : ""
        }
        to={"/users"}
      >
        Users
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 border-pink-600" : ""
        }
        to={"/signUp"}
      >
        Sign Up
      </NavLink>
    </div>
  );
}

export default NavBar