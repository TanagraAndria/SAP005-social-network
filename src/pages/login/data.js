import { onNavigate } from '../../utils/history.js';

const auth = firebase.auth();
const firestore = firebase.firestore();
const usersCollection = firestore.collection('users');

export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.pathname = '/generalFeed';
      return result;
    });
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      usersCollection.doc(`${user.email}`)
        .set({
          name: user.displayName,
          id: user.uid,
          photo: user.photoURL,
        }, { merge: true });
      onNavigate('/generalFeed');
    });
};

export const signOut = () => {
  auth.signOut();
};
