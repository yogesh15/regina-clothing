import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKMlQ69mWO_EuSeg16ZZgBnz5H7oGK6uc",
    authDomain: "regina-clothing.firebaseapp.com",
    databaseURL: "https://regina-clothing.firebaseio.com",
    projectId: "regina-clothing",
    storageBucket: "regina-clothing.appspot.com",
    messagingSenderId: "178578450824",
    appId: "1:178578450824:web:f8fc404e12b6bd0ab1b23d",
    measurementId: "G-BL3LTSCJGE"
  };

firebase.initializeApp(config);

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;