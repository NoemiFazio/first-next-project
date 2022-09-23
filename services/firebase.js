// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Get DATA from a collection: https://firebase.google.com/docs/firestore/quickstart#web-version-9
import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvg6rupyDNAns57zeRqPSwxfumx8Dfkw",
  authDomain: "first-next-project-7c690.firebaseapp.com",
  projectId: "first-next-project-7c690",
  storageBucket: "first-next-project-7c690.appspot.com",
  messagingSenderId: "144201823329",
  appId: "1:144201823329:web:a65cf1b5db707947532620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database Firestore
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "prima-raccolta"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
});

export { app, db, querySnapshot };
