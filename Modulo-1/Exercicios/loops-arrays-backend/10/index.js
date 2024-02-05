const numeros = [8, 11, 4, 1];
let maiorNumero = 0
let menorNumero = Infinity

for(let i = 0; i < numeros.length; i++){
  let numero = numeros[i]

  if(numero > maiorNumero){
    maiorNumero = numero
  }

  if((numero < menorNumero)){
    menorNumero = numero
  }
}

let MaiorDiferencaEntreNumeros = maiorNumero - menorNumero
console.log(MaiorDiferencaEntreNumeros)