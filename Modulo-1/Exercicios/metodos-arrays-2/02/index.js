const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const verificador = (array) => {
  const resultado = array.every((palavra) => {
    return palavra.length <= 5
  })

  if (resultado) {
    console.log("array validado");
  } else {
    console.log("existe palavra inválida");
  }
}

verificador(palavras)