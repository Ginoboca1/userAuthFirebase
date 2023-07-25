import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDhRG3xT9YExJFaWlr1fmMiZ9J9TEM3e0o",
  authDomain: "fir-auth-dada6.firebaseapp.com",
  projectId: "fir-auth-dada6",
  storageBucket: "fir-auth-dada6.appspot.com",
  messagingSenderId: "876530465759",
  appId: "1:876530465759:web:283baa0e32df72fc55e26a",
  measurementId: "G-3EYJQ8NZ8P"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)