import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5i3FnCwU_kzRZ-xL5nn4cMVx3pP7K_l8",
  authDomain: "technomed-upb-fullstack.firebaseapp.com",
  projectId: "technomed-upb-fullstack",
  storageBucket: "technomed-upb-fullstack.firebasestorage.app",
  messagingSenderId: "530041401747",
  appId: "1:530041401747:web:cd5707b4174c292ca6b866"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
