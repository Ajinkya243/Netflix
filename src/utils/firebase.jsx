// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1yHZNjGnw6stIdJuBU1mZLNB2TEPqBiw",
  authDomain: "netflix-76f44.firebaseapp.com",
  projectId: "netflix-76f44",
  storageBucket: "netflix-76f44.firebasestorage.app",
  messagingSenderId: "114334751299",
  appId: "1:114334751299:web:c8492e31795ac65e6b12f6",
  measurementId: "G-9M7X4TNE0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();