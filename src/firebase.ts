// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpPjsoB_eXJ7iVOGDoBQY9-6H-Ef7pVQo",
  authDomain: "kadastore-ea4da.firebaseapp.com",
  projectId: "kadastore-ea4da",
  storageBucket: "kadastore-ea4da.appspot.com",
  messagingSenderId: "991260221952",
  appId: "1:991260221952:web:4e1f07d8a4b1938f146ee5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const auth = getAuth(app);
