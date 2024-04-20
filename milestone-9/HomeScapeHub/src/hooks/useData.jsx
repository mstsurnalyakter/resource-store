import { useEffect } from "react";
import { useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);

    const [dataLoading, setDataLoading] = useState(true);

      useEffect(() => {
        const loadData = async () => {
          try {
            setDataLoading(true);
            const res = await fetch("/data.json");
            if (!res.ok) {
              throw new Error("Fail to data fetch");
            }
            const fetchData = await res.json();
            setData(fetchData);
            setDataLoading(false);
          } catch (error) {
            console.log(error);
          }
        };
        loadData();
      }, []);


  return {data,dataLoading}
}

export default useData