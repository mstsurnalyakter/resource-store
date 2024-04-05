// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALubCl55MEsY1V0RsosD3yUdQohP-wjko",
  authDomain: "user-auth-app-21a32.firebaseapp.com",
  projectId: "user-auth-app-21a32",
  storageBucket: "user-auth-app-21a32.appspot.com",
  messagingSenderId: "312985971919",
  appId: "1:312985971919:web:039912bfc912d10fc95bba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
