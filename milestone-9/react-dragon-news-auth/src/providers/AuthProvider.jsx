import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    const auth = getAuth(app)

    const createUser = (email,password) =>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const singIn = (email,password) =>{
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
      setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user inside onAuthStateChange',currentUser);
            setUser(currentUser);
            setLoading(false)
        });
      return () => unSubscribe();
    },[auth])


  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
