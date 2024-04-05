import './App.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  /**
   * W#1w@7alILSusr
   */
  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSingIn}>Google SingIn</button>
      {user && (
        <div>
          <h4>User:</h4>
        </div>
      )}
    </>
  );
}

export default App
