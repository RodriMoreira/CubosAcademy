const palavras = ["arroz", "feijão", "carne", "macarrão"]

const verificador = (array) => {
  const resultado = array.some((bebidaAlcolica) => {
    return (bebidaAlcolica == "cerveja"|| bebidaAlcolica == "vodka")
  })

  if (resultado) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
  } else {
    console.log("tudo certo, vamos as compras!");
  }
}

verificador(palavras)