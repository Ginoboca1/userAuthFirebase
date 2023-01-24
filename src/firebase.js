// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmgyNcvtaADPOLRoVsyfLvdyDk8gaGIQI",
  authDomain: "react-firebase-auth-29be8.firebaseapp.com",
  projectId: "react-firebase-auth-29be8",
  storageBucket: "react-firebase-auth-29be8.appspot.com",
  messagingSenderId: "210094270110",
  appId: "1:210094270110:web:315a0d47be4023bd287d8f",
  measurementId: "G-0XR1FKKSN9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)