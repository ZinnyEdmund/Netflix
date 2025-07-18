// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpEJmMR1pXO92PCLcoDGNXi6xUna0C2U0",
  authDomain: "netflixclone-5e1b1.firebaseapp.com",
  projectId: "netflixclone-5e1b1",
  storageBucket: "netflixclone-5e1b1.firebasestorage.app",
  messagingSenderId: "872771888499",
  appId: "1:872771888499:web:aadd81c5ab61174d5f5106",
  measurementId: "G-1YKQ327Y2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);