import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDuGgbaPr4EsN8Y32KI0XM-kjZ_Mtw8jVI",
  authDomain: "react-clone-4f700.firebaseapp.com",
  projectId: "react-clone-4f700",
  storageBucket: "react-clone-4f700.appspot.com",
  messagingSenderId: "441005075665",
  appId: "1:441005075665:web:a7c3be717b95fa28e829f0",
  measurementId: "G-4K8T9BVFR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
