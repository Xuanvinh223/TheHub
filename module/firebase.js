// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, set, push, update, remove, onValue } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI9U0QQChnLvV_c11keJyoa1U-EoL1Fc8",
    authDomain: "learning-d1fb8.firebaseapp.com",
    databaseURL: "https://learning-d1fb8-default-rtdb.firebaseio.com",
    projectId: "learning-d1fb8",
    storageBucket: "learning-d1fb8.appspot.com",
    messagingSenderId: "219054219146",
    appId: "1:219054219146:web:a3f2f69762d10704d3b273",
    measurementId: "G-4Y98KN1VVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Đảm bảo rằng `database` được khởi tạo và có thể sử dụng ở đây.
export { database, ref, set, push, update, remove, onValue };
