import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCuKVjkwCRnGg3swId3Paa7dgK54Dnw_9Q",
  authDomain: "hostel-connect-55495.firebaseapp.com",
  projectId: "hostel-connect-55495",
  storageBucket: "hostel-connect-55495.appspot.com",
  messagingSenderId: "436230731482",
  appId: "1:436230731482:web:aa89c852248dbf5076d7e3",
  measurementId: "G-WYQ2EECYG3",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
