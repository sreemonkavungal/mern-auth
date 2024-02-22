// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-eeb9b.firebaseapp.com",
  projectId: "mern-auth-eeb9b",
  storageBucket: "mern-auth-eeb9b.appspot.com",
  messagingSenderId: "1063133179802",
  appId: "1:1063133179802:web:f82497a793dc4583061423"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);