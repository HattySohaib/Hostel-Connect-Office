import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
// CONFIG FIELDS REMOVED
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
