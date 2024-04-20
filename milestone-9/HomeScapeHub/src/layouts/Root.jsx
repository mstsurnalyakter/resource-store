import Footer from "../pages/Shared/Footer/Footer"
import NavBar from "../pages/Shared/NavBar/NavBar"
import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
  import { ToastContainer } from "react-toastify";



const Root = () => {
  return (
    <div className="font-poppins">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 lg:px-2  mt-10 mb-10 min-h-[calc(100vh-432px)]">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Root
