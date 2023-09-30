// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsXej_5ZQRX7_gFfN79gxmF0MVi3f44g",
  authDomain: "user-email-password-auth-4c159.firebaseapp.com",
  projectId: "user-email-password-auth-4c159",
  storageBucket: "user-email-password-auth-4c159.appspot.com",
  messagingSenderId: "180989169473",
  appId: "1:180989169473:web:770a9dbaedbf7f1e6adbc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth
