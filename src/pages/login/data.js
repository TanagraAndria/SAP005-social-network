import { onNavigate } from '../../utils/history.js';

const auth = firebase.auth();
const firestore = firebase.firestore();
const usersCollection = firestore.collection('users');

export const signIn = (email, password) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((event) => {
      window.location.pathname = onNavigate('/generalFeed');
      event.preventDefault();
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
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Essa conta já existe');
      }
    });
};
