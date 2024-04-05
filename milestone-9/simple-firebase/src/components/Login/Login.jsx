import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth,googleProvider)
    .then(result=>{
       const loggedUser = result.user;
       console.log(loggedUser);
       setUser(loggedUser)
    })
    .catch(error=>{
        console.log('error',error.message);
    })
  };
  const handleGoogleSingOut = () =>{
    signOut(auth)
    .then(result=>{
      console.log(result);
      setUser(null)
    })
    .catch(error=>{
      console.log('error',error.message);
    })
  }

const handleGithubSingUp = () =>{
  signInWithPopup(auth,githubProvider)
      .then(result=>{
       const loggedUser = result.user;
       console.log(loggedUser);
       setUser(loggedUser)
    })
    .catch(error=>{
        console.log('error',error.message);
    })

}

  return (
    <div className="w-52 mx-auto">
      {user ? (
        <button className="btn bg-purple-300" onClick={handleGoogleSingOut}>
          Google SignOut
        </button>
      ) : (
        <>
          <button className="btn bg-purple-300" onClick={handleGoogleSingIn}>
            Google SingUp
          </button>
          <button onClick={handleGithubSingUp} className="btn bg-purple-300">Github SingUp</button>
        </>
      )}

      {user && (
        <div className="mt-10">
          <h2>User: {user?.displayName}</h2>
          <h2>Email: {user?.email}</h2>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

Login.propTypes = {};

export default Login;
