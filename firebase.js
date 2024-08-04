// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD8SvIwagExn-1s3nAkzKn_Qyh2AWQVJk",
  authDomain: "inventory-management-591b9.firebaseapp.com",
  projectId: "inventory-management-591b9",
  storageBucket: "inventory-management-591b9.appspot.com",
  messagingSenderId: "632274924376",
  appId: "1:632274924376:web:33764fd08025b565dbab2d",
  measurementId: "G-QMJVCBCKZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}