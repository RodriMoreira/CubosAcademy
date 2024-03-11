const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorNumero = (array) => {
  const resultadoNumero = array.reduce((acumulador, valorAtual) => {
    return valorAtual > acumulador ? valorAtual : acumulador
  })

  console.log(resultadoNumero);
}

maiorNumero(numeros)