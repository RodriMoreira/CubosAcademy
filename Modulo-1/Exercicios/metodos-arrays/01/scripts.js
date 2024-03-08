const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function OrganizarInverso(array) {
  array.reverse()
  const textoArray = array.join(", ")

 console.log(textoArray);
}

function removerPrimeiroUltimo(array) {
  array.shift()
  array.pop()
  array.push("Melão")
  
 console.log(array)
}

OrganizarInverso(frutas)
removerPrimeiroUltimo(frutas)