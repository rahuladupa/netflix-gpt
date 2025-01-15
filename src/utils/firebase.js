// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6gPISfPCw4dUXv87VmPHaPPxy3DE_yS0",
  authDomain: "netflixgpt-34f5f.firebaseapp.com",
  projectId: "netflixgpt-34f5f",
  storageBucket: "netflixgpt-34f5f.firebasestorage.app",
  messagingSenderId: "441980746954",
  appId: "1:441980746954:web:4ef82c47aaccbbebfbc833",
  measurementId: "G-LL9MBVQC5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()