import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useContextData from "./useContextData";

const useMyPostedJobs = () => {
  const {user} = useContextData()
  const { data=[], isLoading, refetch } = useQuery({
    queryKey: ["myJobs"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/jobs/${user?.email}`
      );
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useMyPostedJobs;
