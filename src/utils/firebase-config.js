// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCrwVFS1toUUASrRsfX5Xn6gOfpGOJTw-8",
  authDomain: "netflix-clone-react-8bedd.firebaseapp.com",
  projectId: "netflix-clone-react-8bedd",
  storageBucket: "netflix-clone-react-8bedd.appspot.com",
  messagingSenderId: "134942937285",
  appId: "1:134942937285:web:18685a109323b687b8e0ac",
  measurementId: "G-028YL8K451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);