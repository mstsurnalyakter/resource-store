import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
const [user,setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const handleSingUp = () =>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const loggedInUser = result.user;
      setUser(loggedInUser)
      console.log(loggedInUser);
    })
    .catch(error=>{
      console.log("error",error.message);
    })

  }

  return (
    <div>
      <h2 className="mb-3">SingUp with Google</h2>
      <button
        onClick={handleSingUp}
        className="bg-red-400 text-white px-3 py-2 mb-10"
      >
        SingUp
      </button>

    {user && <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={user.photoURL}
          alt={`${user.displayName} image`}
          className="border-4 rounded-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.displayName}</h2>
        <p>{user.email}</p>
      </div>
    </div>}
   {/* {user && <img src={user.photoURL} alt="" />} */}
    </div>
  );
}

export default Login