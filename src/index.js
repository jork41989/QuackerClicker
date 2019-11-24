const Board = require('./board')
var firebase = require("firebase");
var firebaseui = require('firebaseui');


var firebaseConfig = {
  apiKey: "AIzaSyAaO68ld1_epQOncLuHANEilrAqmx9Zw6Y",
  authDomain: "quackerclicker.firebaseapp.com",
  databaseURL: "https://quackerclicker.firebaseio.com",
  projectId: "quackerclicker",
  storageBucket: "quackerclicker.appspot.com",
  messagingSenderId: "482264507310",
  appId: "1:482264507310:web:b2af0b69956c8b8eb85e3f",
  measurementId: "G-GYNWXSCZQ8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// var uiConfig = {
//   signInSuccessUrl: '/',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ]
// };

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

document.addEventListener("DOMContentLoaded", function () {
  const gameDiv = document.getElementById("game")
  const board = new Board(gameDiv)
  board.startup()

  
})

