// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD24fDsA7Iyc4luVvDISphR1rvlMZfcjlg",
  authDomain: "netflixgpt-b9b32.firebaseapp.com",
  projectId: "netflixgpt-b9b32",
  storageBucket: "netflixgpt-b9b32.firebasestorage.app",
  messagingSenderId: "470104212013",
  appId: "1:470104212013:web:f4d07f10fadbe573e1eea4",
  measurementId: "G-LSH5CNJYEB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
