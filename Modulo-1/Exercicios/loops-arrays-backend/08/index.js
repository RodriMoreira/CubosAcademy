const numeros = [3, 24, 1, 8, 11, 7, 15];
let maiorNumero = 0
for(let i = 0; i < numeros.length; i++){
  let numero = numeros[i]

  if(numero > maiorNumero){
    maiorNumero = numero
  }
}

console.log(maiorNumero)