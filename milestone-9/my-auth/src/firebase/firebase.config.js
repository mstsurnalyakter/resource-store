// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZA6R1mm4UUa7EdgGuOZ8hbzsHANKLww",
  authDomain: "my-app-73f2e.firebaseapp.com",
  projectId: "my-app-73f2e",
  storageBucket: "my-app-73f2e.appspot.com",
  messagingSenderId: "50003680557",
  appId: "1:50003680557:web:7bc3b85df298e95a8947a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
