// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDvdo_Iju6kP0JE0bBdtmibbneRZpYRIw",
  authDomain: "wkltest.firebaseapp.com",
  projectId: "wkltest",
  storageBucket: "wkltest.appspot.com",
  messagingSenderId: "713383194729",
  appId: "1:713383194729:web:759391be66bcae90a772f8",
  measurementId: "G-FQPTB83DKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const authentication = getAuth(app);