// Firebase configuration - Using compat SDK (loaded via script tags in index.html)
// No need for imports - firebase global object is available from script tags

window.BARBARA_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBfwCRrvq-WPlcTkwNxrnMLI8ThQOGxW9E",
  authDomain: "barbarabeauty-5d75a.firebaseapp.com",
  projectId: "barbarabeauty-5d75a",
  storageBucket: "barbarabeauty-5d75a.firebasestorage.app",
  messagingSenderId: "207260630604",
  appId: "1:207260630604:web:eef19636976d1bd4e37ee9",
  measurementId: "G-M4DKXD38NW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(window.BARBARA_FIREBASE_CONFIG);
}

window.BARBARA_FIREBASE_DOC_PATH = "sistemas/barbarabeauty";
