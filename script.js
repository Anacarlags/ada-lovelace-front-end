
document.getElementById("botao-enviar").addEventListener("click", validaForm)

function validaForm(){

  if(document.getElementById("Nome").value !="" && document.getElementById("email").value !="" && document.getElementById("telefone").value != "" ){

  alert("Prontinho! Você receberá as novidades por email.")

  }else{
  alert("Por favor, preencha os campos nome e email!")

  }
}