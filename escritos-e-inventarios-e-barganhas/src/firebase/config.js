import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBKFPEjyTdiyaMIalTda-Qw02Z8tOl10Tw",
  authDomain: "booksguide-b2fbf.firebaseapp.com",
  projectId: "booksguide-b2fbf",
  storageBucket: "booksguide-b2fbf.appspot.com",
  messagingSenderId: "138588238246",
  appId: "1:138588238246:web:f9f8c85790ce5b9a415f67"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}
