
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4gABB-Q3pJmHMnXGLZjgAsSvAK40jU-Y",
  authDomain: "dal-go-visualiser.firebaseapp.com",
  projectId: "dal-go-visualiser",
  storageBucket: "dal-go-visualiser.appspot.com",
  messagingSenderId: "473267439719",
  appId: "1:473267439719:web:4abf3d1e4f268b96f36cc2",
  measurementId: "G-MHTWGTEQHZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
          const name = result.user.displayName;
          const email = result.user.email;
          const profilePic = result.user.profilePic;

          localStorage.setItem("name", name)
          localStorage.setItem("email", email)
          localStorage.setItem("profilePic", profilePic)
        })
        .catch((error) => {
            console.log(error);
    });
};