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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

