import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB61G0AuEUn7UKoPaR3pjZWr0-idKLlz5E",
    authDomain: "letschat-91757.firebaseapp.com",
    projectId: "letschat-91757",
    storageBucket: "letschat-91757.appspot.com",
    messagingSenderId: "692359478860",
    appId: "1:692359478860:web:382ff87b7bac0c43ca7ee9",
    measurementId: "G-4WMFVQY3TM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const Auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;