// Firebase configuration - Using compat SDK (loaded via script tags in index.html)
// No need for imports - firebase global object is available from script tags

// Your web app's Firebase configuration
// window.RAYSSA_FIREBASE_CONFIG = {
//   apiKey: "AIzaSyBfwCRrvq-WPlcTkwNxrnMLI8ThQOGxW9E",
//   authDomain: "barbarabeauty-5d75a.firebaseapp.com",
//   projectId: "barbarabeauty-5d75a",
//   storageBucket: "barbarabeauty-5d75a.firebasestorage.app",
//   messagingSenderId: "207260630604",
//   appId: "1:207260630604:web:eef19636976d1bd4e37ee9",
//   measurementId: "G-M4DKXD38NW"
};

// Document path for syncing across devices
// window.RAYSSA_FIREBASE_DOC_PATH = "sistemas/rayssa-oliveira";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfwCRrvq-WPlcTkwNxrnMLI8ThQOGxW9E",
  authDomain: "barbarabeauty-5d75a.firebaseapp.com",
  projectId: "barbarabeauty-5d75a",
  storageBucket: "barbarabeauty-5d75a.firebasestorage.app",
  messagingSenderId: "207260630604",
  appId: "1:207260630604:web:eef19636976d1bd4e37ee9",
  measurementId: "G-M4DKXD38NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);