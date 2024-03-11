const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
const numeros1 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
// ** => exercício verificado.
//1 **


const ordemCrescente = (array) => {
  const resultadoOrdemCrescente = array.sort((a, b) => {
    return a - b
  })

  console.log(resultadoOrdemCrescente);
}

//2 **
const ordemDecrescente = (array) => {
  const resultadoOrdemDecrescente = array.sort((a, b) => {
    return b - a
  })

  console.log(resultadoOrdemDecrescente);
}

//3 **
const ordemUnicode = (array) => {
  const resultadoOrdemUnicode = array.sort()

  console.log(resultadoOrdemUnicode);
}

//4 **
const ordemAlfabetica = (array) => {
  const resultadoOrdemAlfabetica = array.sort((a, b) => {
    return a.localeCompare(b)
  })

  console.log(resultadoOrdemAlfabetica);
}

//5 **
const ordemAlfabeticaDecrescente = (array) => {
  const resultadoOrdemAlfabeticaDecrescente = array.sort((a, b) => {
    return b.localeCompare(a)
  })

  console.log(resultadoOrdemAlfabeticaDecrescente);
}

//6
const ordemCrescenteCaracteres = (array) => {
  const resultadoOrdemCrescenteCaracteres = array.sort((a, b) => {
    return a.length - b.length
  })

  console.log(resultadoOrdemCrescenteCaracteres);
}

ordemCrescenteCaracteres(frutas)
