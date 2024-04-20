import { useContext } from "react"
import { AuthContext } from "../providers/FirebaseProvider";


const useContextData = () => {
    const contextData = useContext(AuthContext)
  return contextData;
}

export default useContextData