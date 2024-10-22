import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFvZEd9D4qPXtq9Z_6mwOkTHa9D9tLSmw",
  authDomain: "real-b758f.firebaseapp.com",
  projectId: "real-b758f",
  storageBucket: "real-b758f.appspot.com",
  messagingSenderId: "42802013236",
  appId: "1:42802013236:web:78d826a24fcc1c448f5661"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// module.exports = db
export { db };

