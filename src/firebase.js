import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1kziJWeYqsL65K8bvqjDvESG42_UEh7E",
    authDomain: "twitter-clone-3cf1b.firebaseapp.com",
    databaseURL: "https://twitter-clone-3cf1b.firebaseio.com",
    projectId: "twitter-clone-3cf1b",
    storageBucket: "twitter-clone-3cf1b.appspot.com",
    messagingSenderId: "1084579645537",
    appId: "1:1084579645537:web:7d59dbd2d344e29c0b8220"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;