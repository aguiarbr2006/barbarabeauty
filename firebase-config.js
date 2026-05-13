// Firebase configuration - Using compat SDK (loaded via script tags in index.html)
// No need for imports - firebase global object is available from script tags

// Your web app's Firebase configuration
window.BARBARA_FIREBASE_CONFIG = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "barbarabeauty.firebaseapp.com",
  projectId: "barbarabeauty",
  storageBucket: "barbarabeauty.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(window.BARBARA_FIREBASE_CONFIG);
}

// Document path for syncing across devices
window.BARBARA_FIREBASE_DOC_PATH = "sistemas/barbarabeauty";

