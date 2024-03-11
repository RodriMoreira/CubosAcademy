const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

function criarArrayAjustado(array) {
  let novoArray = []
  const frutasMinusculo = array.map(strings => strings.toLowerCase())
  const frutasCapitalizadas = frutasMinusculo.map(strings => strings.charAt(0).toUpperCase() + strings.slice(1)) 

  for (let i = 0; i < array.length; i++) {
    novoArray.push(`${i} - ${frutasCapitalizadas[i]}`)
  }
  
  console.log(novoArray);
}

criarArrayAjustado(frutas)