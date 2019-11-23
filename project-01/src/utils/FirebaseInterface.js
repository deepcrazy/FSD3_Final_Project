const firebase = require('firebase')

const firebaseConfig = {
  apiKey: 'AIzaSyCnnBq-uNQq2rBf1tHInNTjbZXLlwBSiDI',
  authDomain: 'gb-fsd3-project.firebaseapp.com',
  databaseURL: 'https://gb-fsd3-project.firebaseio.com',
  projectId: 'gb-fsd3-project',
  storageBucket: 'gb-fsd3-project.appspot.com',
  messagingSenderId: '1078906843322',
  appId: '1:1078906843322:web:1ec7a7d7cf77e2dd371283',
}

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()

export default function addData (
  firstName,
  lastName,
  dietaryRestriction,
  city,
  province,
  paymentType,
) {
  return new Promise((resolve, reject) => {
    db.collection('submissions')
      .add({
        firstName,
        lastName,
        dietaryRestriction,
        city,
        province,
        paymentType,
      })
      .then(function(docRef) {
        resolve('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        reject('Error adding document: ', error)
      })
  })
}
