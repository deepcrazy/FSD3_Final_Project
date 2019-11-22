// Set the configuration for your app
// var firebase = require('firebase/app')
// require('firebase/auth')
// require('firebase/database')

const firebaseConfig = {
    apiKey: "AIzaSyCnnBq-uNQq2rBf1tHInNTjbZXLlwBSiDI",
    authDomain: "gb-fsd3-project.firebaseapp.com",
    databaseURL: "https://gb-fsd3-project.firebaseio.com",
    projectId: "gb-fsd3-project",
    storageBucket: "gb-fsd3-project.appspot.com",
    messagingSenderId: "1078906843322",
    appId: "1:1078906843322:web:1ec7a7d7cf77e2dd371283"
  };
  
  //initialize if firebase app is not already intialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }