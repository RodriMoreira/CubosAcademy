const valores = [100,  500, 100, 200, 50]
let valorTotal = 0

//Soma o valor total
for(let valor of valores) {
  valorTotal += valor
}

//Faz a verificação da quantidade de itens
if(valores.length >= 5) {

  //Encontra o menor número do array
  let menorNumero = Infinity

  for(let valor of valores) {
    if (valor < menorNumero) {
      menorNumero = valor
    }
  }

  //Aplica o desconto ao valor final
  let valorTotalComDesconto =  valorTotal - menorNumero

  //imprime o valor final COM desconto
  console.log(valorTotalComDesconto)
} else {
  //imprime o valor final SEM desconto
  console.log(valorTotal)
}