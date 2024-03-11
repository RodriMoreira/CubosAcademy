const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
]

const comprimentoString = (array) => {
  const resultadoComprimento = array.reduce((acumulador, valorAtual) => {
    return valorAtual.length > acumulador.length ? valorAtual : acumulador
  })

  console.log(resultadoComprimento);
}

comprimentoString(cidades)