import axios from "axios";
import { useEffect } from "react";
import useContextData from "./useContextData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logout } = useContextData();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
     async (error) => {
        if (error.response.status === 401 || error.response.status === 404) {
          await logout()
          navigate("/login");
        }
        return Promise.reject(error)
      }
    );
  }, [logout, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
