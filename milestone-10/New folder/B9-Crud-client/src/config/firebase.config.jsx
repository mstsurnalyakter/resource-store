// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const ENV = import.meta.env;

const firebaseConfig = {
  apiKey: ENV.VITE_APIKEY,
  authDomain: ENV.VITE_AUTHDOMAIN,
  projectId: ENV.VITE_PROJECTID,
  storageBucket: ENV.VITE_STORAGEBUCKET,
  messagingSenderId: ENV.VITE_MESSAGINGSENDERID,
  appId: ENV.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
