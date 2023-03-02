const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // verifica se o nome esta vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

  // verifique se o email esta preenchodo e se e valido
  if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor, preencha o seu email")
    return;
  }

  // verificar se a esta preenchida
  if(!validatePassword(passwordInput.value, 8)){
  alert("A senha precisa ser no minimo 8 dígitos.")
  return;
  }

  // verificar se a situação foi selecionada
  if (jobSelect.value === ""){
    alert("Por favor, selicione a sua situação")

  }

  // verificar se a menssagem esta preenchida
  if (messageTextarea.value === ""){
    alert("Por favor, escreva uma mensagem")
  }


  // se todo os campos estiverm  corretamente preenchidos, envie o  form
  form.submit();
});

// função que valida e-mail

function isEmailValid (email){
  // cria um regex para validar email
  const emailRegex = new RegExp(
   /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(email)){
    return true
  }

  return false;
}

// função que valida a senha
function validatePassword(password, minDigits){
  if(password.length >= minDigits){
    // senha valida
    return true
  }

  // senha invalidade
  return false

}
