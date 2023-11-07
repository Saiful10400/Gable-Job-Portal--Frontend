// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4F116QOb1BCXyr__bhdPT44ZnYToALP4",
  authDomain: "gable-job-portal.firebaseapp.com",
  projectId: "gable-job-portal",
  storageBucket: "gable-job-portal.appspot.com",
  messagingSenderId: "56027226440",
  appId: "1:56027226440:web:be79401b5975f90cc3537d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth