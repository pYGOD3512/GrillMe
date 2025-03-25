// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPdRJaLeOGmnRo0zoQ_ebyMpQmIpNID_4",
  authDomain: "grillme-9116b.firebaseapp.com",
  projectId: "grillme-9116b",
  storageBucket: "grillme-9116b.firebasestorage.app",
  messagingSenderId: "558130668003",
  appId: "1:558130668003:web:0a139ecd696468e53000d6",
  measurementId: "G-MFDMKYTW77"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);