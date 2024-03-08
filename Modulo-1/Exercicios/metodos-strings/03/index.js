let texto = "Aprenda programar do zero na Cubos Academy";

function replaceAll(textoOriginal, textoAntigo, textoNovo) {
  while(textoOriginal !== textoOriginal.replace(textoAntigo, textoNovo)) {
    textoOriginal = textoOriginal.replace(textoAntigo, textoNovo)
  }
  return textoOriginal
}

console.log(replaceAll(texto, " ", "-"));