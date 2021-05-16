import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAnWgj9u1dqm46bV_bice_iK3JTBmOHDFM",
    authDomain: "inventory-8fa53.firebaseapp.com",
    projectId: "inventory-8fa53",
    storageBucket: "inventory-8fa53.appspot.com",
    messagingSenderId: "678876990422",
    appId: "1:678876990422:web:1ade9ead803270ab817277",
    measurementId: "G-6T60JM9LRN"
  }

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
