import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../utilities/url";

const useCraftItems = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["craftItems"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/paperGlasses`);
      const data = await res.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default useCraftItems;
