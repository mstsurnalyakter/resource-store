import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="space-x-3 mb-10 mx-auto w-20 mt-10">
      <Link className="bg-purple-400 p-3 underline" to={"/"}>
        Home
      </Link>
      <Link className="bg-purple-400 p-3 underline" to={"/login"}>
        Login
      </Link>
    </div>
  );
}

export default Header