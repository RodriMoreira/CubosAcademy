const numeros = [54, 22, 14, 87, 10, 284];
let numeroDez = false
let indice = -1

for(let numero of numeros) {
  indice++
  if(numero === 10){
    console.log(`O numero está na posição (indice): ${indice}`)
    numeroDez = true
  }
}

if(!numeroDez) {
  console.log("-1")
}