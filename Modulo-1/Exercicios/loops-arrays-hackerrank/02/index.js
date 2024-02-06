const valores = [100,  500, 100, 200, 50]
let menorNumero = Infinity
let valorTotal = 0

//Soma o valor total
for(let valor of valores) {
  valorTotal += valor
}

//Encontra o menor número do array
for(let valor of valores) {
  if (valor < menorNumero) {
    menorNumero = valor
  }
}

//Faz a verificação do desconto e imprime o valor final na tela
if(valores.length >= 5) {
  let valorTotalComDesconto =  valorTotal - menorNumero
  console.log(valorTotalComDesconto)
} else {
  console.log(valorTotal)
}