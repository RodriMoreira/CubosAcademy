const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somaNumerosPares = 0;

for(let pares of numeros){
  if(pares % 2 === 0) {
    somaNumerosPares += pares
  }
}

console.log(somaNumerosPares)