import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import useContextData from '../../hooks/useContextData';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContextData();
    const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch(error=>toast.error(error.message))
    }
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to={"/"} className="flex gap-2 items-center">
          <img className="w-auto h-7" src={logo} alt="" />
          <span className="font-bold">SoloSphere</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/all-jobs"}>AllJobs</NavLink>
          </li>

          {!user && (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/add-job"} className="justify-between">
                  Add Job
                </Link>
              </li>
              <li>
                <Link to={"/my-posted-job"}>My Posted Jobs</Link>
              </li>
              <li>
                <Link to={"/my-bids"}>My Bids</Link>
              </li>
              <li>
                <Link to={"/bid-requests"}>Bid Requests</Link>
              </li>
              <li>
                <Link to={"/all-jobs"}>Bid Requests</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleLogOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
