// firebase-config.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0DrIGTvY0U3GgucUxisj3XBRFneE4w88",
  authDomain: "rotaractwebsite2025-e1d60.firebaseapp.com",
  projectId: "rotaractwebsite2025-e1d60",
  storageBucket: "rotaractwebsite2025-e1d60.appspot.com", // ✅ Make sure .app is replaced with .app**spot.com**
  messagingSenderId: "133087289949",
  appId: "1:133087289949:web:88cd7ad2d1805ee8fbe3b4"
};

// ✅ Initialization first
const app = initializeApp(firebaseConfig);

// ✅ Then auth and provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Then Firestore
const db = getFirestore(app);

export { auth, provider, db };
