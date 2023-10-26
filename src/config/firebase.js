// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {
    getAnalytics
} from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3fFSG-ljGa8iC0iFf1DHEfiheFpGabOQ",
    authDomain: "fir-course-da546.firebaseapp.com",
    projectId: "fir-course-da546",
    storageBucket: "fir-course-da546.appspot.com",
    messagingSenderId: "931123282728",
    appId: "1:931123282728:web:23ad0399f0c9f7b0ae061d",
    measurementId: "G-YH30DPZBEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider();