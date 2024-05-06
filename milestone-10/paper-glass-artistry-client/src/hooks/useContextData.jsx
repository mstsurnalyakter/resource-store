import { useContext } from "react"
import { AuthContext } from "../providers/FirebaseProvider"


const useContextData = () => {
    const allContextData = useContext(AuthContext)
  return allContextData;
}

export default useContextData