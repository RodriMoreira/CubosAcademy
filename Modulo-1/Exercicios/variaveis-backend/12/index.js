let montante = 90_000;
let capitalInicial = 60_000;
let numeroDeMeses = 24;

let mc = montante / capitalInicial;

let taxaDeJuros = Math.pow(mc, (1/numeroDeMeses)) - 1
let JurosPorcentagem = taxaDeJuros * 100

console.log(`taxa de juros = ${JurosPorcentagem.toFixed(2)}`)