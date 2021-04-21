import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_gmAtDkN0y8skqQBZi_tfXajHwQ6dMGI",
  authDomain: "facebook-clone-294a9.firebaseapp.com",
  projectId: "facebook-clone-294a9",
  storageBucket: "facebook-clone-294a9.appspot.com",
  messagingSenderId: "367143300543",
  appId: "1:367143300543:web:dc9c45c4be9a49c629c50a",
  measurementId: "G-CQPK19Z3D5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };

export default db;
