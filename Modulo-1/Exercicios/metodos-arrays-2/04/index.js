const numeros = [0, 122, 4, 6, 8, 44, 7]

const verificador = (array) => {
  const resultado = array.every((numero) => {
    return (numero % 2) == 0
  })

  if(resultado) {
    console.log("Array VALIDO");
  } else {
    console.log("Array INVALIDO");
  }
}

verificador(numeros)