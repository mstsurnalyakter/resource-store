import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";


const Login = () => {
    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = () =>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log("error",error.message);
        })
    }
  return (
    <div className="w-40 mx-auto mt-20">
      <button onClick={handleGoogleSingIn} className="bg-purple-400 p-4 text-white font-bold">
        Sing Up With Google
      </button>
    </div>
  );
};

export default Login;
