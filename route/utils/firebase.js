const firebase = require('firebase');

// const firebaseConfig = {
//     apiKey: "AIzaSyApFv_PGUqN9S2sYZ0VyGsq4e2PV3zz8gg",
//     authDomain: "reactresume-32cfb.firebaseapp.com",
//     databaseURL: "https://reactresume-32cfb-default-rtdb.firebaseio.com",
//     projectId: "reactresume-32cfb",
//     storageBucket: "reactresume-32cfb.appspot.com",
//     messagingSenderId: "261540264994",
//     appId: "1:261540264994:web:d8f3e90f2aa7d2fafa5e7b",
//     measurementId: "G-1XZFTTM0X7"
//   };
    
const firebaseConfig = {
  apiKey: "AIzaSyAbE68U1GTeYMBF3UNMtPVto3_bUVUbHSs",
  authDomain: "jinzhang-resume-react.firebaseapp.com",
  databaseURL: "https://jinzhang-resume-react-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jinzhang-resume-react",
  storageBucket: "jinzhang-resume-react.appspot.com",
  messagingSenderId: "607869936338",
  appId: "1:607869936338:web:5f2a68fef3f09055db030b",
  measurementId: "G-4YHH8WNTGG"
};

firebase.initializeApp(firebaseConfig);
var firedatabase = firebase.database();
var firestorage = firebase.storage();


module.exports = {firedatabase, firestorage};