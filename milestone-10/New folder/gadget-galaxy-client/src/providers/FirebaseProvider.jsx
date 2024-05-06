import { createContext } from "react"
import PropTypes from "prop-types";

export const AuthContext = createContext(null);


const FirebaseProvider = ({children}) => {

    const authInfo = {
        name:"alex"
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node,
};

export default FirebaseProvider