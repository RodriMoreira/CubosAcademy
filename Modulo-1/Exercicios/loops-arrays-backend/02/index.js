const letras = ["A", "a", "B", "C", "E", "e"];
let letraE = false
let somaLetraE = 0

for(let letra of letras) {
  if(letra === "E" || letra === "e") {
    somaLetraE++
    letraE = true
  }
}
if(!letraE) {
  console.log("Nenhuma letra E ou e foi encontrada.")
}

console.log(`Foram encontradas ${somaLetraE} letras "E" ou "e".`)