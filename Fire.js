import { initializeApp } from "firebase/app";
import  firebase  from "firebase/compat/app";
var firebaseConfig = {
  apiKey: "AIzaSyB0VJlZR59V2iBRRqjP-0sFphBkFtaZYYs",
  authDomain: "plug-insta.firebaseapp.com",
  databaseURL: "https://plug-insta-default-rtdb.firebaseio.com",
  projectId: "plug-insta",
  storageBucket: "plug-insta.appspot.com",
  messagingSenderId: "512921104551",
  appId: "1:512921104551:web:0442ed141f2443aa9bab82"
};

// Initialize Firebase
const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;