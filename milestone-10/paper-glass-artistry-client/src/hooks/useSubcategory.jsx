
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../utilities/url";

const useSubcategory = () => {
   const { data, isLoading, refetch } = useQuery({
     queryKey: ["/subcategories"],
     queryFn: async () => {
       const res = await fetch(`${baseURL}/subcategories`);
       const data = await res.json();
       return data;
     },
   });
   return { data, isLoading, refetch };
}

export default useSubcategory