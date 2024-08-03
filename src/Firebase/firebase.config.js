// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJsxKd0eqv-wyJiGXu3GqucWaDk7Lre_s",
  authDomain: "scopioe-c9f29.firebaseapp.com",
  projectId: "scopioe-c9f29",
  storageBucket: "scopioe-c9f29.appspot.com",
  messagingSenderId: "687932871085",
  appId: "1:687932871085:web:c54b88849fd71b86309124",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
