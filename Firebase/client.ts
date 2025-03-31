
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from "firebase/auth";
import {Firestore, getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfwkH5PpZjDSM0p6BSzCqv8OwJuuAkszk",
    authDomain: "prepguru-b4482.firebaseapp.com",
    projectId: "prepguru-b4482",
    storageBucket: "prepguru-b4482.firebasestorage.app",
    messagingSenderId: "541094884828",
    appId: "1:541094884828:web:61dabe36304a5d81950b19",
    measurementId: "G-4E6LNTQFBH"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig) : getApps();
export const auth=getAuth(app);
export const db=getFirestore(app);