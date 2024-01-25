let capital = 1000;
let periodoDeTempo = 5;
let taxaDeJuros = 0.125;

let montante = capital * (Math.pow((1 + taxaDeJuros ), periodoDeTempo));

console.log(Math.round(montante));