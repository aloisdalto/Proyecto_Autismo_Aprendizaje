const btnSingIn = document.querySelector('#sign-in');
const btnSingUp = document.querySelector('#sign-up');
const divRegister = document.querySelector('.register');
const divLogin = document.querySelector('.login');

btnSingIn.addEventListener("click", e => {
    divRegister.classList.add("hide");
    divLogin.classList.remove("hide")
});

btnSingUp.addEventListener("click", e => {
    divLogin.classList.add("hide");
    divRegister.classList.remove("hide");
});

document.getElementById('form-register').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var userData = {
      name: name,
      email: email,
      password: password
    };
  
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Te has registrado correctamente');
});

document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var loginUsername = document.getElementById('login-email').value;
    var loginPassword = document.getElementById('login-password').value;
  
    var storedData = JSON.parse(localStorage.getItem('userData'));
  
    if (loginUsername === storedData.email && loginPassword === storedData.password) {
      alert('Has iniciado sesión correctamente!');
      window.location.href = '../3.Elegir nivel/elegir_nivel.html';
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  });
  
  


