// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoMtvc_Y0tJLwNUcxusAqJbUzrBuXcPPM",
  authDomain: "rpixplore-86af5.firebaseapp.com",
  projectId: "rpixplore-86af5",
  storageBucket: "rpixplore-86af5.firebasestorage.app",
  messagingSenderId: "1061758931305",
  appId: "1:1061758931305:web:35c7f41f2873d7ae5b2df8",
  measurementId: "G-FKHJT81BLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase modules for use
export const auth = getAuth(app);
export const db = getFirestore(app);
