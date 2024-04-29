
import { useEffect, useState } from "react"


const useComments = () => {
    const [comments,setComments] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [toggle,setToggle] = useState(false);

    const refetch = () =>{
        setToggle(!toggle);
    }


    useEffect(()=>{
        setIsLoading(true)
        fetch(`http://localhost:5000/comments`)
          .then((res) => res.json())
          .then((data) => {
            setComments(data);
            setIsLoading(false)
          })
          .catch((error) => console.error(error));
    },[toggle])

  return { comments ,isLoading,refetch};
}

export default useComments