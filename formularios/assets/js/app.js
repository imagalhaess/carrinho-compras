
limpar();

function cadastrar() {
  // Obter os valores dos campos de entrada
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  // Mostrar no console os valores
  console.log("Nome: " + nome);
  console.log("Email: " + email);
  // Verificar se os campos estão preenchidos
  if (nome.trim() === "" || email.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  // Exibir na tela os valores
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Nome: ${nome}<br>Email: ${email}`;
}

function limpar(){
  // Limpar os campos de entrada
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  // Limpar o resultado anterior
  document.getElementById("resultado").innerText = "";
}

function alterarMensagem() {
  // Obter o elemento de texto
  const paragrafo = document.getElementById("mensagem");
  // Alterar o conteúdo do elemento
  paragrafo.textContent = "Mensagem alterada!";
}