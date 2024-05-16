import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import useContextData from "./useContextData";

const useBooking = () => {
    const {user} = useContextData()
      const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const {data,isLoading,refetch} = useQuery({
        queryKey:["bookings"],
        queryFn:async () =>{
            const {data} = await axios(url);
            return data;
        }
    })
  return {data,isLoading,refetch}
}

export default useBooking