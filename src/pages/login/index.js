export const Login = () => {

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div  id="firebaseui-auth-container" class="container-login">
  
          <img src="./img/logo.png" class="logo">
          <img src="./img/pessoas.png" class="people">
        
        
          <div id="root">
            <h4>Your Pet's ally !!!</h4>
          </div>

          
          <div class="form" id="form">
        
            <h3> <Label>E-mail:</Label>
              <input type="text" id="e-mail">
            </h3> 
        
            <h3>
              <Label>Senha:</Label>
              <input type="password" id="password"> 
            </h3> 

          </div>

        <div class"buttons">
          <h3>
            <button id="register" class="register">Cadastrar</button>
            <button id="login" class="login">Login</button>
          </h3>
        </div>

        <div id= "google" class= "g-signin2" data-onsuccess= "onSignIn" data-theme= "dark" > </div>       
  </div> 

  `;

  const emailButton = rootElement.querySelector("#e-mail")
  const passwordButton = rootElement.querySelector("#password")
  const registerButton = rootElement.querySelector("#register")
  const loginButton = rootElement.querySelector("#login")
  const googleButton = rootElement.querySelector("#google")

  registerButton.addEventListener("click", () => {
    console.log("oi")
    firebase.auth().createUserWithEmailAndPassword(emailButton.value, passwordButton.value)
    console.log(emailButton.value)
    console.log(passwordButton.value)
    // then(()=> console.log("deu certo")) 
    //     alert("Cadastrado com sucesso")   
    // .catch((error)=> {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       // ..
    // });  .

  });
  loginButton.addEventListener("click", () => {
    console.log("sim")
  })

    googleButton.addEventListener("click", () => {
      
    })


        return rootElement;
 };
