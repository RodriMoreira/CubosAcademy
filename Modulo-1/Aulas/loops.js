let paises = ["Brasil", "Argentina", "Canada", "China", "Russia"];
let indice = 0

//WHILE
while(indice < paises.length) {
  console.log(paises[indice])
  indice++
}

//FOR
for(let i = 0; i < paises.length; i++) {
  console.log(paises[i])
}

//FOR OF (Melhor opção para percorrer um array)
for(let nome of paises) {
  console.log(nome)
}

//Exercicio 0 -------------------
let numero = [1, 2, 3, 4]
let somaTotal = 0

for(let i = 0 ; i < numero.length; i++) {
  somaTotal += numero[i]
}

console.log(somaTotal)

//Exercicio 1 -------------------

let palavra = "Alemanha"
let letraEncontrada = false
for(let letra of palavra) {
  if(letra === "h" || letra === "H") {
    console.log("A palavra tem a letra H")
    letraEncontrada = true
  } 
}
if(!letraEncontrada) {
  console.log("Não encontrado")
}

//Exercicio 2 -------------------

let QuantidadeLetrasA = "AlemanhaAAAA"
let letraA = false
let somaLetraA = 0
for(let letra of QuantidadeLetrasA) {
  if(letra === "a" || letra === "A") {
    somaLetraA++
    letraA = true
  } 
}
if(!letraA) {
  console.log("Não encontrado")
}
console.log(somaLetraA)

//Exercicio 3 -------------------
for(let i = 10; i >= 0; i--) {
  console.log(i)
}

//Exercicio 4 -------------------

for(let i = 1; i <= 50; i++) {
  if((i % 2) === 0) {
    console.log(i)
  }
}