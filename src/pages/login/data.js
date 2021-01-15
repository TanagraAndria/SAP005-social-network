import { onNavigate } from '../../utils/history.js';

export const signIn = (email, password) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      const name = firebase.auth().currentUser.displayName;
      alert(`Olá, ${name}!`);
      onNavigate('/generalFeed');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const msgError = 'Senha inválida ou usuário não cadastrado!';
      console.log(errorCode);
      console.log(errorMessage);
      alert(msgError);
      // ...
      // eslint-disable-next-line no-unused-expressions
    }); email - password.html;
};

const auth = firebase.auth();
const firestore = firebase.firestore();
const usersCollection = firestore.collection('users');

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
