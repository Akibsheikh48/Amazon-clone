import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-uyNL8579FusrO2metzKygQprliPqj44",
  authDomain: "clone-akib.firebaseapp.com",
  databaseURL: "https://clone-akib.firebaseio.com",
  projectId: "clone-akib",
  storageBucket: "clone-akib.appspot.com",
  messagingSenderId: "312439984539",
  appId: "1:312439984539:web:1e08725ded8ded642e913e",
  measurementId: "G-SEY3QY9ZQM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
