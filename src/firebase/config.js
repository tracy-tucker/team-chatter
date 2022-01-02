import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyAMgGtb6Fvk8v1x7cSuuniVvMkkkA1jFSw",
    authDomain: "team-chatter-a34da.firebaseapp.com",
    projectId: "team-chatter-a34da",
    storageBucket: "team-chatter-a34da.appspot.com",
    messagingSenderId: "557011663219",
    appId: "1:557011663219:web:31c016e4ed271996372d06",
    measurementId: "G-ZSFEV4BN0K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  // explicit export
  export {auth, provider};

  // default export
  export default db;
