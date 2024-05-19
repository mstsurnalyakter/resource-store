import {useQuery} from "@tanstack/react-query";
import useContextData from "./useContextData";
import useAxiosSecure from "./useAxiosSecure";

const useBooking = () => {
    const {user} = useContextData()
     const axiosSecure = useAxiosSecure();
      const url = `/bookings?email=${user?.email}`;
    const {data,isLoading,refetch} = useQuery({
        queryKey:["bookings"],
        queryFn:async () =>{
            const {data} = await axiosSecure.get(url);
            return data;
        }
    })
  return {data,isLoading,refetch}
}

export default useBooking