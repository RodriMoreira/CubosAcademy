const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const filtro = (array) => {
  const numerosPares = array.filter((numeros) => {
    return numeros % 2 == 0
  })

  console.log(numerosPares);
}

filtro(numeros)