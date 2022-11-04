import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGkDpOd8d4RDx5KWHdHYvTqV4ZcRG6_Ww",
  authDomain: "twitter-clone-367507.firebaseapp.com",
  projectId: "twitter-clone-367507",
  storageBucket: "twitter-clone-367507.appspot.com",
  messagingSenderId: "1009179484872",
  appId: "1:1009179484872:web:6d910a8b7a9eca1023bbfd",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
