import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useContextData = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useContextData;
