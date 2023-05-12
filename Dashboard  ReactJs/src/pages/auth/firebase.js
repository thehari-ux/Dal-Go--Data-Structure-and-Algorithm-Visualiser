
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZNhcuavgBBOgejDsmv3y5kscUOcJZQXs",
  authDomain: "auth-algo.firebaseapp.com",
  projectId: "auth-algo",
  storageBucket: "auth-algo.appspot.com",
  messagingSenderId: "185686013269",
  appId: "1:185686013269:web:4bef4ff5feaea4fc31ebdc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()



export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

        resolve(result.user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};



