import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"


const useComments2 = () => {


 const {data,isLoading,refetch} =   useQuery({
        queryKey:["comments"],
        queryFn: async ()=>{
            const res = await fetch("http://localhost:5000/comments");
            const data = await res.json();
            return data;
        }

    })
    return { data, isLoading, refetch };
}

export default useComments2