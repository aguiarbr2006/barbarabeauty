// Firebase configuration - Using compat SDK (loaded via script tags in index.html)
// No need for imports - firebase global object is available from script tags

// Your web app's Firebase configuration
// Substitua os valores abaixo pelos dados reais do seu Projeto Firebase.
// Vá em Firebase Console > Configurações do projeto > Seus apps > Web App.
// window.BARBARA_FIREBASE_CONFIG = {
//   apiKey: "SUA_API_KEY_AQUI",
//   authDomain: "barbarabeauty.firebaseapp.com",
//   projectId: "barbarabeauty",
//   storageBucket: "barbarabeauty.appspot.com",
//   messagingSenderId: "SEU_MESSAGING_SENDER_ID",
//   appId: "SEU_APP_ID"
// };

// Initialize Firebase
 if (!firebase.apps.length) {
 firebase.initializeApp(window.BARBARA_FIREBASE_CONFIG);
 }

// Document path for syncing across devices
 window.BARBARA_FIREBASE_DOC_PATH = "sistemas/barbarabeauty";


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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