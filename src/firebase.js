import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBYGWAUc3IoRLEPs1jYIjXpH3bTs548-nA",
  authDomain: "ural-sigorta.firebaseapp.com",
  projectId: "ural-sigorta",
  storageBucket: "ural-sigorta.firebasestorage.app",
  messagingSenderId: "913472119541",
  appId: "1:913472119541:web:c236503774d7a78c219bbc",
  measurementId: "G-XV4F71NN3F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);