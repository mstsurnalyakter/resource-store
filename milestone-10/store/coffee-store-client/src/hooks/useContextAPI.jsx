import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"


const useContextAPI = () => {
    const allData = useContext(AuthContext);
  return allData
}

export default useContextAPI