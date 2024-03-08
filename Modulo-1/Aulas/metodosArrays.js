const array = []

array.indexOf() //Localiza um item e diz seu índice
array.includes() //Localiza um item e diz TRUE ou FALSE
array.reverse() //Reverte o array ORIGINAL
array.join("") //transforma um array num texto
array.concat() //Concatena arrays, a ordem segue a formula: A.concat(B,C)
array.slice() //copia itens de um array a partir do primeiro fator, não indice, até o segundo: array.slice(1, 2) o SEGUNDO NÃO está incluso, então, para pegar o item 1 ate o 2, usar: slice(1,3)

array.splice(1,2, "f") //Adiciona, remove ou substitui itens no meio do array. Consultar mozilla para lembrar
                       //PRIMEIRO localiza o item a partir do indice, SEGUNDO apaga um determinado numero de itens a partir do localizado (0 para caso não queira apagar nada) e TERCEIRO... a partir do terceiro é adicionado itens

//INVERTER TEXTO
function inverterTexto(texto) {
  const arrayDeTexto = texto.split("");
  arrayDeTexto.reverse()
  
  let textoInvertido = arrayDeTexto.join(" ")
  console.log(textoInvertido)
}

inverterTexto("Rodrigo")