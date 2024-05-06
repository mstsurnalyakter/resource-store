
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../utilities/url";
const useTestimonial = () => {
   const { data, isLoading, refetch } = useQuery({
     queryKey: ["testimonials"],
     queryFn: async () => {
       const res = await fetch(`${baseURL}/testimonials`);
       const data = await res.json();
       return data;
     },
   });
   return { data, isLoading, refetch };
}

export default useTestimonial