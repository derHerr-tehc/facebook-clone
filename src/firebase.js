import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA43x0xlDPEkE6X4ekyJNs8_MvGdJTlAT8",
    authDomain: "facebook-clone-2eb63.firebaseapp.com",
    databaseURL: "https://facebook-clone-2eb63.firebaseio.com",
    projectId: "facebook-clone-2eb63",
    storageBucket: "facebook-clone-2eb63.appspot.com",
    messagingSenderId: "42697032672",
    appId: "1:42697032672:web:1c4278b5f341652195e185"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;