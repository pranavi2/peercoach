import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdqTzZ9EzAc7MfP_MvZQ82hZRDQ1Aey9Y",
  authDomain: "peercoach-2025.firebaseapp.com",
  projectId: "peercoach-2025",
  storageBucket: "peercoach-2025.appspot.com",
  messagingSenderId: "53301938994",
  appId: "1:53301938994:web:9426015c22fdd6f7b20ce5"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firestore reference
const db = getFirestore(app);

export { db };
