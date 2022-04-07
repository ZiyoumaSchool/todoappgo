//import firebase from "firebase/compat/app";
import firebase from 'firebase/compat/app';
require('firebase/compat/auth');
//import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMMv8HlBZKDic7uc5liivOdJguDOeWBqg",
    authDomain: "todoapp-2541b.firebaseapp.com",
    databaseURL: "https://todoapp-2541b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoapp-2541b",
    storageBucket: "todoapp-2541b.appspot.com",
    messagingSenderId: "196439909361",
    appId: "1:196439909361:web:00b8d22cc42d9d74ee5a50"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;