import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
    apiKey: "AIzaSyARfLrTV8gdbKugxfEs0r1sjX2NXssKvXk",
    authDomain: "da-bees-db.firebaseapp.com",
    databaseURL: "https://da-bees-db.firebaseio.com",
    projectId: "da-bees-db",
    storageBucket: "da-bees-db.appspot.com",
    messagingSenderId: "327360902265",
    appId: "1:327360902265:web:215974cc417572a1d210a8",
    measurementId: "G-7K9WE5HDPH"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

