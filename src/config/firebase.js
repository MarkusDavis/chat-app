import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVyAsaRoY5EOjNcDS6GN5bnqBhzPudec0",
  authDomain: "markus-davis-business.firebaseapp.com",
  databaseURL: "https://markus-davis-business-default-rtdb.firebaseio.com",
  projectId: "markus-davis-business",
  storageBucket: "markus-davis-business.appspot.com",
  messagingSenderId: "995422433233",
  appId: "1:995422433233:web:cfd2f276f3dea0da4dfaf0",
  measurementId: "G-E6FS4B4JXF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()