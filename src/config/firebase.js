// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwZ9xic80j7ZL0XHiujD5Y_0v6GfJjaMU",
  authDomain: "employee-portal-41ec9.firebaseapp.com",
  projectId: "employee-portal-41ec9",
  storageBucket: "employee-portal-41ec9.appspot.com",
  messagingSenderId: "527295876661",
  appId: "1:527295876661:web:6c9d6c9fb821e5421aeb7c",
  measurementId: "G-KYH2BNGG6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export  {auth, db};