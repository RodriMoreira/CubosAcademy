let numeroLadosPoligono = 6;
let somaAngulosInternos =  (numeroLadosPoligono - 2) * 180;
let angulo = somaAngulosInternos / numeroLadosPoligono;

let resultado = `A soma dos ângulos internos é igual a ${somaAngulosInternos}, considerando que o número de lados é igual a ${numeroLadosPoligono}, cada ângulo equivale a ${angulo} graus`

console.log(resultado)