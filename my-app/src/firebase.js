import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,  // Changed from redirect
  signOut,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmlb8qd01dWIFmjTU2K9nxKaVzO-wdGmY",
  authDomain: "promito.firebaseapp.com",
  projectId: "promito",
  storageBucket: "promito.firebasestorage.app",
  messagingSenderId: "488761159159",
  appId: "1:488761159159:web:8d89a79295b5d696e412f2",
  measurementId: "G-MRJ8V7WVHT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


setPersistence(auth, browserSessionPersistence)
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { auth, provider, signOut ,signInWithPopup};