// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsCdcuwxEfrY_x-YIwPw1FL0_FddlK_8c",
    authDomain: "tech-ademy.firebaseapp.com",
    projectId: "tech-ademy",
    storageBucket: "tech-ademy.appspot.com",
    messagingSenderId: "424974538769",
    appId: "1:424974538769:web:d17c293f790249540539b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;