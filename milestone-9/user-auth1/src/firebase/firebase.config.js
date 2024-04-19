// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQBbKplMMfAI8SXSHcnwPJeok54mGUUlU",
  authDomain: "user-auth-55941.firebaseapp.com",
  projectId: "user-auth-55941",
  storageBucket: "user-auth-55941.appspot.com",
  messagingSenderId: "1061638296974",
  appId: "1:1061638296974:web:4fb6804704039c07f780df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
