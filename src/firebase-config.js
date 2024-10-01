// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYCir4bIr6vMbgUixnasUzjB9q3S5l4f8",
  authDomain: "alex-personal-site-6f4d4.firebaseapp.com",
  projectId: "alex-personal-site-6f4d4",
  storageBucket: "alex-personal-site-6f4d4.appspot.com",
  messagingSenderId: "301026151941",
  appId: "1:301026151941:web:4ffabd9f08c7dc729d966c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };