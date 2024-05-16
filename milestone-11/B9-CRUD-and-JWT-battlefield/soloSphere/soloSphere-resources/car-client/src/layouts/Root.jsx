import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="space-y-10">
      <NavBar />
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster/>
    </div>
  );
};

export default Root;
