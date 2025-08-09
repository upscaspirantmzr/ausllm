// This file contains the Firebase configuration for your project.
// You must replace the placeholder values with your own Firebase project's config.

// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyCaMG51o9ZQKhh1XDL3CesKtqvfVqSU9MY",
    authDomain: "ausllm.firebaseapp.com",
    projectId: "ausllm",
    storageBucket: "ausllm.firebasestorage.app",
    messagingSenderId: "1005593440678",
    appId: "1:1005593440678:web:ce7814e912d9aecfc1df67",
    measurementId: "G-134NYJNCHC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the initialized services so they can be used in other files
export { auth, db };
