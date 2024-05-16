import axios from "axios"
import { useEffect } from "react";
import useContextData from "./useContextData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://car-server-gamma.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
    const {logout} = useContextData();
    const navigate = useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },error=>{

            if (
              error.response.status === 401 ||
              error.response.status === 404
            ) {
                
                 logout()
                   .then(() => {
                    navigate("/login")
                   })
                   .catch((error) => toast.error(error.message));
            }
        })
    },[logout,navigate])
    return axiosSecure;
}

export default useAxiosSecure