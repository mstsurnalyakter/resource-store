import { Outlet } from "react-router"
import Footer from "../pages/Shared/Footer/Footer"
import NavBar from "../pages/Shared/NavBar/NavBar"
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <NavBar />
        <div className="mb-10">
          <Outlet />
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Root