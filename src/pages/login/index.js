import { signIn, loginWithGoogle } from './data.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
<<<<<<< HEAD
  <div class="container-login">
  
    <img src="./img/logo.png" class="logo">
    <img src="./img/pessoas.png" class="people">
  
  
    <div id="root">
     <h4>Your Pet's ally !!!</h4>
    </div>
    <section id="form">
    <div class="email">
  
    <h3> <Label>E-mail:</Label>
      <input type="text" id="e-mail">
    </h3> 
  </div>
  <div class="password">
    <h3>
      <Label>Senha:</Label>
      <input type="password" id="password"> 
    </h3> 
    </div>
  </section>
  <section class"buttons">
    <h3>
      <button id="register" class="register">Cadastrar</button>
      <button id="login" class="login">Login</button>
    </h3>
  </section>
  </div> 
  `;
  const registerButton = rootElement.querySelector("#register")
  const loginButton = rootElement.querySelector("#login")

  registerButton.addEventListener("click", () => {
    console.log("oi")


    // alert("Cadastrado com sucesso");

  });



  loginButton.addEventListener("click", () => {
    console.log("sim")

  })


  return rootElement;
};
=======

      <div id = "firebaseui-auth-container" class = "container-login">

      <div class='box-item'><h1>S E C U R I T Y  PET</h1>
      <img src ="./ img / pessoas.png"  alt='Logotype' class='icon-large'>
      </div><br>

      <div class='box-item'>

      <h3>WELCOME TO SECURITY PET</h3>

      <form method='post'>
      <input type='email' placeholder='Email' id='emailArea' class='login-area'><br>
      <input type='password' placeholder='Senha' id='passwordArea' class='login-area'><br><br>
      </form>

      <div class="inerror-message" id="error-login">
      </div>

      <button class='button-area btn signIn'>Entrar</button>
      <p class="ou">━━━━━━━━━ OU ━━━━━━━━━</p>

      <button class='button-area btn btnGoogle'>Acesse com <img src='./ img /google-icon.png' alt='Google' class='google-icon'></button><br><br><br>
      <p class='font-small'>Se não tem um conta, <a href='/#signup' id='sign-up-login'>registre-se aqui.</a></p>

      </div>
  `;

  const googleButton = rootElement.querySelector('.btnGoogle');
  googleButton.addEventListener('click', () => {
    loginWithGoogle();
  });

  const signInButton = rootElement.querySelector('.signIn');
  signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    signIn(
      rootElement.querySelector('#emailArea').value,
      rootElement.querySelector('#passwordArea').value,
    );
  });
  const linkSignUp = rootElement.querySelector('#sign-up-login');
  linkSignUp.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/signup');
  });

  return rootElement;
};
>>>>>>> 3344d318b2080953dcd4cac4bdc48ecf641f989e
