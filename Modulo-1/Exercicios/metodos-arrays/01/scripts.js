const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function OrganizarInverso(array) {
  array.reverse()
  const textoArray = array.join(", ")

  return console.log(textoArray);
}

function removerPrimeiroUltimo(array) {
  array.shift()
  array.pop()
  array.push("Melão")
  
  return console.log(array)
}

OrganizarInverso(frutas)
removerPrimeiroUltimo(frutas)