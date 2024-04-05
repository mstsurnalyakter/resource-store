import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div className="space-x-10 mt-5">
      <Link className="bg-purple-500 px-3 py-2 text-white" to={"/"}>
        Home
      </Link>
      <Link className="bg-purple-500 px-3 py-2 text-white" to={"/login"}>
        Login
      </Link>
      {/* <Link className="bg-purple-500 px-3 py-2 text-white" to={"/contact"}>
        Contact
      </Link> */}
    </div>
  );
}

export default Nav