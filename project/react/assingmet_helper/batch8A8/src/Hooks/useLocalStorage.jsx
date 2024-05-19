import { useEffect, useState } from "react";
import useDonationData from "./useDonationData"
import { getDonationFromLS } from "../utils/localStorage";

const useLocalStorage = () => {
    const  {data,loading} = useDonationData();
    const [dataLS,setDataLS] = useState([]);
    useEffect(()=>{
        const getLocalStoredId = getDonationFromLS();
        const filterData = data.filter(item => getLocalStoredId.includes(item.id));
        setDataLS(filterData);
    },[data])
  return {dataLS ,loading}
}

export default useLocalStorage