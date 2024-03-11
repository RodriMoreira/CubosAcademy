const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const filtro = (array) => {
  const numerosPositivos = array.filter((numeros) => {
    return numeros > 0
  })

  console.log(numerosPositivos);
}

filtro(numeros)