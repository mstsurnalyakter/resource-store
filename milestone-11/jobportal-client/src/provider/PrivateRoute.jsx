import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="mt-16 w-[300px] mx-auto ">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
