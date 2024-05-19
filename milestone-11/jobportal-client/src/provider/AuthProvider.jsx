
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
import toast from 'react-hot-toast';
import axios from 'axios';



//Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signIn user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout user
  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };

  //google signIn
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //github sign in
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //Update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      if (currentUser) {
        setUser(currentUser);

        //if user exists then issue a token
        axios
          .post(`https://jobportal-server-ochre.vercel.app/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            //
          })
          .catch((error) => {
            toast.error(error.message);
          });
      } else {
        axios
          .post(
            `https://jobportal-server-ochre.vercel.app/logout`,
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {})
          .catch((error) => {
            toast.error(error.message);
          });
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    googleLogin,
    githubLogin,
    updateUserProfile,
    logOut,
    user,
    setUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider