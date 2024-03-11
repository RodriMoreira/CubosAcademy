const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
]

const verificarCidades = (array) => {
  const resultado = array.filter((cidade) => {
    return cidade.length <= 8
  })

  console.log(resultado.join(", "));
}

verificarCidades(cidades)