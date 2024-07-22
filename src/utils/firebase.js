// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCXpvesqvqs9_PxOslHNqgD4QPus_eJZTo",
	authDomain: "netflixgpt-6c886.firebaseapp.com",
	projectId: "netflixgpt-6c886",
	storageBucket: "netflixgpt-6c886.appspot.com",
	messagingSenderId: "793666579953",
	appId: "1:793666579953:web:ffcc7a177971f78c42a850",
	measurementId: "G-6T8744SF3D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
