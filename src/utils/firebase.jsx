// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQSbDT5JuRn1BH3RQ9YwWeAzzNgIqbb-4",
  authDomain: "flatwala-7a56f.firebaseapp.com",
  projectId: "flatwala-7a56f",
  storageBucket: "flatwala-7a56f.appspot.com",
  messagingSenderId: "172557598826",
  appId: "1:172557598826:web:ee728fe9d4fbda40548a13",
  measurementId: "G-2LVTYR8DJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);