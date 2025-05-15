function adicionar() {
  const selectProduto = document.getElementById("produto");
  const produtoSelecionado = selectProduto.value;
  const partes = produtoSelecionado.split(" - ");
  const nomeProduto = partes[0]; // Nome do produto
  const valorUnitario = parseFloat(
    partes[1].replace("R$ ", "").replace(",", ".")
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
}
