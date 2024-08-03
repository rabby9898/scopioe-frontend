// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJsxKd0eqv-wyJiGXu3GqucWaDk7Lre_s",
  authDomain: "scopioe-c9f29.firebaseapp.com",
  projectId: "scopioe-c9f29",
  storageBucket: "scopioe-c9f29.appspot.com",
  messagingSenderId: "687932871085",
  appId: "1:687932871085:web:c54b88849fd71b86309124",
  //   apiKey: import.meta.env.VITE_API_KEY,
  //   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  //   projectId: import.meta.env.VITE_PROJECT_ID,
  //   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  //   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  //   appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
