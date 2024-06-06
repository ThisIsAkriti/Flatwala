// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh3F5kN0JfHZW8bC6rToMpGg5C5gFP2H0",
  authDomain: "flatwala-60892.firebase.app",
  projectId: "flatwala-60892",
  storageBucket: "flatwala-60892.appspot.com",
  messagingSenderId: "689554694256",
  appId: "1:689554694256:web:d30646cbbdc139b9f054b5",
  measurementId: "G-FQVBZ95ZM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);