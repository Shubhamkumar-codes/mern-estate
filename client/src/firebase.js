// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a7f7f.firebaseapp.com",
  projectId: "mern-estate-a7f7f",
  storageBucket: "mern-estate-a7f7f.appspot.com",
  messagingSenderId: "669190133368",
  appId: "1:669190133368:web:6650b7f48250f5cc9aff8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);