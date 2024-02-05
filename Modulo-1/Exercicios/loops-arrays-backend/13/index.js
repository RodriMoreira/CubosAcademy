const disjuntores = [false, false, true, false, false, true, false, false];
let disjuntoresAtivos = []
let indice = 0

for(let fase of disjuntores) {
  
  if(fase){
    disjuntoresAtivos.push(indice)
  }
  indice++
}

console.log(disjuntoresAtivos)