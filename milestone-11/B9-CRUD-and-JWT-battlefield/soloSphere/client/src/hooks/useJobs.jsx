import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useJobs = () => {
  const axiosSecure = useAxiosSecure();
  const { data=[], isLoading, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const {data }= await axiosSecure(`/jobs`);
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useJobs;
