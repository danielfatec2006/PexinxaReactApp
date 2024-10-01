import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfY-x8Va-kPjTxY47t9BohuTm5pI411p0",
  authDomain: "pexinxa-database.firebaseapp.com",
  projectId: "pexinxa-database",
  storageBucket: "pexinxa-database.appspot.com",
  messagingSenderId: "1026440123527",
  appId: "1:1026440123527:web:6f7f393b6ab231e5f75422",
  measurementId: "G-GBTNE8DHY9"
};

export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const emailPasswordSignIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export {db,auth,googleProvider};