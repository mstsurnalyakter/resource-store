
import PropTypes from 'prop-types'
import { createContext, useState } from "react"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [users,setUsers] = useState(null);
    const [loading, setLoading] = useState(true);


    const handleSignUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const handleSingIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
      users,
      loading,
      handleSignUp,
      handleSingIn,
    };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}


AuthProvider.propTypes = {
  children:PropTypes.node
};

export default AuthProvider