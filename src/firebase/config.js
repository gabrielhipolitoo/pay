import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA4LiSDZ5NoTf3ujri_iLAdmxsNLIAnLCw",
  authDomain: "payments-b4a32.firebaseapp.com",
  projectId: "payments-b4a32",
  storageBucket: "payments-b4a32.appspot.com",
  messagingSenderId: "937301796232",
  appId: "1:937301796232:web:9ed54881ba302a6fd7c63d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

export {db,auth}
