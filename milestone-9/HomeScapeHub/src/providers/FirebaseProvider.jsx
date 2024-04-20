import  { createContext, useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

//social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)


//create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password )

  };


    const updateUserProfile = (fullName,  photoURL) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: photoURL,
      });
    };



  //sign in user
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


    const logout = () => {
      setUser(null);
      signOut(auth);
    };


  // google sign in
  const googleLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }

  //github sign in
 const githubLogin = () =>{
  setLoading(true);
  return signInWithPopup(auth,githubProvider)
 }

 //twitter sign in
 const twitterLogin = () =>{
  setLoading(true);
  return signInWithPopup(auth,twitterProvider)
 }



  //observer
  useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
     setUser(user);
    }
    setLoading(false);

 });

    return () => unsubscribe();

  },[])


    const authInfo = {
      user,
      setUser,
      loading,
      createUser,
      logout,
      signInUser,
      googleLogin,
      githubLogin,
      twitterLogin,
      updateUserProfile,
    };
  return (
    <AuthContext.Provider value={authInfo}>
      {
        children
      }
    </AuthContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node,
};

export default FirebaseProvider