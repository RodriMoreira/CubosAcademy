const original = [1, 4, 12, 21, 53, 88, 112];
let arrayCopia = []

for(let pares of original) {
  if(pares % 2 === 0) {
    arrayCopia.push(pares)
  }
}

console.log(arrayCopia)