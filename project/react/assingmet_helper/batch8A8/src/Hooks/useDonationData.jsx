import { useEffect, useState } from "react"


const useDonationData = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const loadData =async () =>{
            try {
                setLoading(true)
                const res = await fetch("/data.json");
                if (!res.ok) {
                    throw new Error("Fail to data fetch")
                }
                const fetchData = await res.json();
                // console.log(fetchData);
                setData(fetchData)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    },[])
  return {data,loading}
}

export default useDonationData