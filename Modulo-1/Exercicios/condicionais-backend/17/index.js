//valor do produto comprado.
const valorDoProdutoReais = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorCadaParcela = valorDoProdutoReais / quantidadeDoParcelamento
const valorQueFaltaPagar = valorDoProdutoReais - valorPago
const parcelasRestantes = quantidadeDoParcelamento - (valorPago / valorCadaParcela)

console.log(`Restam ${parcelasRestantes} de ${valorCadaParcela}$ Reais`)