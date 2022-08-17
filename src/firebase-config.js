import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "note-task-326b3.firebaseapp.com",
  projectId: "note-task-326b3",
  storageBucket: "note-task-326b3.appspot.com",
  messagingSenderId: "985461101076",
  appId: "1:985461101076:web:d5dfe195559033dc354d01",
  measurementId: "G-SN7RBERHSQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
