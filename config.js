import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyAn3PEwxvVgkBcduQo37phZ8tzAEFiCvYg",
    authDomain: "storyhub-f7508.firebaseapp.com",
    databaseURL: "https://storyhub-f7508-default-rtdb.firebaseio.com",
    projectId: "storyhub-f7508",
    storageBucket: "storyhub-f7508.appspot.com",
    messagingSenderId: "444397131022",
    appId: "1:444397131022:web:1d06dbe0783d638affb35f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();