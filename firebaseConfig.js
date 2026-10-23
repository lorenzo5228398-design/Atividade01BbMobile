// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVSlZlB7Rn-Tu2IV0rV6vsRdwRQAT8h5Y",
    authDomain: "banco-mobile-2b212.firebaseapp.com",
    projectId: "banco-mobile-2b212",
    storageBucket: "banco-mobile-2b212.firebasestorage.app",
    messagingSenderId: "37935356470",
    appId: "1:37935356470:web:e511369a3282bf81f9d697",
    databaseURL: 'https://banco-mobile-2b212-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);