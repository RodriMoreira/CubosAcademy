//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (Reais)
const valorDoProdutoReais = 130;
const descontoCredito = (valorDoProdutoReais * (5 / 100)).toFixed(2)
const descontoCheque = (valorDoProdutoReais * (3 / 100)).toFixed(2)
const descontoDinheiroOuDebito = (valorDoProdutoReais * (10 / 100)).toFixed(2)
if(tipoDePagamento === "credito") {
  console.log(valorDoProdutoReais - descontoCredito)
} else if(tipoDePagamento === "cheque") {
  console.log(valorDoProdutoReais - descontoCheque)
} else if(tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
  console.log(valorDoProdutoReais - descontoCheque)
} else {
  console.log("ERROR")
}

