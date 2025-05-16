let total;
limpar ();

function adicionar() {
  // Recupera o valores nome do produto, valor e a quantidade
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split(" - ")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  // Calcular o subtotal
  let subtotal = valorUnitario * quantidade;
  let carrinho = document.getElementById("lista-produtos");
  // Adiciona o produto ao carrinho
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span>x ${nomeProduto}  <span class="texto-azul"> R$${subtotal}</span>
        </section>`
  // Atualiza o valor total
  total += subtotal;
  // Atualiza o valor total na tela
  let totalElement = document.getElementById("valor-total");
  totalElement.innerText = `R$ ${total.toFixed(2)}`;
  document.getElementById("quantidade").value = 0; // Limpa o campo de quantidade
}
function limpar() {
total = 0;
document.getElementById("lista-produtos").innerHTML = ""; // Limpa a lista de produtos
document.getElementById("valor-total").innerText = `R$ ${total.toFixed(2)}`; // Mostra o valor total zerado
}