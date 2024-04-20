import { useEffect, useState } from "react";


const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
 
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setDataLoading(true);
        const res = await fetch("/testimonialData.json");
        if (!res.ok) {
          throw new Error("Fail to data fetch");
        }
        const fetchData = await res.json();
        setTestimonials(fetchData);
        setDataLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return { testimonials, dataLoading };
}

export default useTestimonials