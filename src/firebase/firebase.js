import "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSl-c_Dl_maX9bJEI09k4CkN3y_PdS97Y",
  authDomain: "chatroom-demo-602.firebaseapp.com",
  projectId: "chatroom-demo-602",
  storageBucket: "chatroom-demo-602.appspot.com",
  messagingSenderId: "71672228675",
  appId: "1:71672228675:web:4ac9f6ed00c6a776205df6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export const signInWithGooglePopUp = async () => {
  return await signInWithPopup(auth, provider);
};
