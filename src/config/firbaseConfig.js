import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";

var firebaseConfig = {
    apiKey: "AIzaSyBMMv8HlBZKDic7uc5liivOdJguDOeWBqg",
    authDomain: "todoapp-2541b.firebaseapp.com",
    databaseURL: "https://todoapp-2541b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoapp-2541b",
    storageBucket: "todoapp-2541b.appspot.com",
    messagingSenderId: "196439909361",
    appId: "1:196439909361:web:00b8d22cc42d9d74ee5a50"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.database();

  export default firebase;