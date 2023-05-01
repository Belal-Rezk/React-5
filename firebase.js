// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIMVvmmMjeGKTPEvYgUFWcNH6tmJkQ7sQ",
  authDomain: "react-notes-91ddb.firebaseapp.com",
  projectId: "react-notes-91ddb",
  storageBucket: "react-notes-91ddb.appspot.com",
  messagingSenderId: "59492280419",
  appId: "1:59492280419:web:ba9db123b0b1b8e6003056"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
