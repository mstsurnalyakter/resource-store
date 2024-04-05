import { useEffect, useState } from "react"


const useDonationData = () => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
            const fetchData = async () => {
              try {
                setLoading(true)
                const res = await fetch("/data.json");
                if (!res.ok) {
                  throw new Error("Fail to data load");
                }
                const data = await res.json();
                setData(data);
                setLoading(false);
              } catch (error) {
                console.log(error);
              }
            };
            fetchData();

    },[])
  return { data, loading };
}

export default useDonationData;