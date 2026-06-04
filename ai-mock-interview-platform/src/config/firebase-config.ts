import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUArKd1dkVdip9CxmjQjvDDV5aln9gT5A",
  authDomain: "mock-interview-e08e4.firebaseapp.com",
  projectId: "mock-interview-e08e4",
  storageBucket: "mock-interview-e08e4.firebasestorage.app",
  messagingSenderId: "705366532714",
  appId: "1:705366532714:web:d6b94b973483ec1b772013"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);