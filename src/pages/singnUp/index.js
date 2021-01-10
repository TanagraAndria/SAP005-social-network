// import { createAccount} from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const SignUp = () => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('class', 'box');
  rootElement.innerHTML = `
<<<<<<< HEAD
<div class='box-item1'>
  <img src='../../img/logo.png' alt='Logotype' class='icon-logohome' />
=======
  <div class='box-item'>
  <h1><img src='../../img/logo.png' alt='Logotype' class='icon-large'></h1>
>>>>>>> 9278a1ae7356dc0fbc51601abf4a2c7ce681320d
  <img src='../../img/pessoas.png' alt='Logotype' class='icon-large'>
</div>

<div class='box-item'>
  <h3>CRIAR UMA NOVA CONTA</h3>
  <form method='post'>
    <input type="text" placeholder="Insira seu nome" id="username" class='login-area'>
    <input type="email" placeholder="Insira um email" id="register-email" class="login-area">
    <input type="password" placeholder="Insira uma senha" id="register-password" class="login-area">
    <div class="error-message" id="singup-error">
    </div>
    <button class="btn button-area" id="button-register">Cadastre-se</button>
  </form>
</div>

`;

  const email = rootElement.querySelector('#register-email');
  const password = rootElement.querySelector('#register-password');
  const signUpButton = rootElement.querySelector('#button-register');
  signUpButton.addEventListener('click', () => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
  });
  const linkLogin = rootElement.querySelector('#button-register');
  linkLogin.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/feed');
  });

  return rootElement;
};
