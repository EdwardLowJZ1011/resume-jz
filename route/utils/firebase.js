const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyApFv_PGUqN9S2sYZ0VyGsq4e2PV3zz8gg",
    authDomain: "reactresume-32cfb.firebaseapp.com",
    databaseURL: "https://reactresume-32cfb-default-rtdb.firebaseio.com",
    projectId: "reactresume-32cfb",
    storageBucket: "reactresume-32cfb.appspot.com",
    messagingSenderId: "261540264994",
    appId: "1:261540264994:web:d8f3e90f2aa7d2fafa5e7b",
    measurementId: "G-1XZFTTM0X7"
  };
    
firebase.initializeApp(firebaseConfig);
var firedatabase = firebase.database();


module.exports = firedatabase;