let total = 0;
function adicionar() {
  const selectProduto = document.getElementById("produto");
  const produtoSelecionado = selectProduto.value;

  const partes = produtoSelecionado.split(" - ");
  const nomeProduto = partes[0]; // Nome do produto, primeira parte do array
  const valorUnitario = parseFloat(
    partes[1].replace("R$", "").replace(",", ".")
  ); // Remove 'R$ ' e substitui ',' por '.'
  const selectQuantidade = document.getElementById("quantidade");
  const quantidade = parseInt(selectQuantidade.value);
  const subtotal = valorUnitario * quantidade;

  const listaProdutos = document.getElementById("lista-produtos");
  const itemCarrinho = document.createElement("section");
  itemCarrinho.classList.add("carrinho__produtos__produto");
  itemCarrinho.innerText = `${quantidade}x ${nomeProduto} - R$ ${valorUnitario.toFixed(
    2
  )}`;
  listaProdutos.appendChild(itemCarrinho);

  total += subtotal;
  const totalElement = document.getElementById("valor-total");
  totalElement.innerText = `R$ ${total.toFixed(2)}`;

  
}
function limpar() {
  document.getElementById("lista-produtos").innerHTML = ""; // Limpa a lista de produtos
  total = 0; // Reseta o total
  const totalElement = document.getElementById("valor-total").innerText = `R$ ${total.toFixed(2)}`; // Mostra o valor total resetado na tela
}