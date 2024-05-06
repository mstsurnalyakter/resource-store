import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../utilities/url";

const useBanner = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/banners`);
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useBanner;
