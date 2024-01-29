//Operadores de comparação
const maior = 20 > 10; 
const menor = 10 < 20; 

const maiorOUigual = 21 >= 20; 
const menorOUigual = 19 <= 20; 

//Operadores de igualdade
const igual = 10 == "10"; 
const diferente = 11 != "10"; 

//Operadores de identidade
const identidadeIgual = "15" === "15";
const identidadeDiferente = 15 !== "15";

// IF - ELSE
const idade = 30; //anos

if (idade >= 18){
  //Executado caso a condição seja verdadeira

  console.log("É maior de idade")
} else if (idade >= 65 ) {
  console.log("É um idoso")
} else {
  console.log("É menor de idade")
}

//Operadores lógicos
const AND = (10 > 8 && 25 < 50); //TRUE _ TRUE = TRUE
const OR = (10 > 5 || 18 < 20); //TRUE _ FALSE = TRUE
const NOT = !(10 > 5); //TRUE --> FALSE
const NOT2 = !(10 < 5); //FALSE --> TRUE

console.log(NOT, NOT2);

//Truthiness
const FALSY = `Valores: undefined, Null, NotANumber (NaN), "", 0, false`
const TRUTHY = `Todos os outros valores exceto os considerados FALSY`

//Operador ternário
const SALDO = 10;
const unidade = SALDO === 10 ? `TRUE` : `FALSE`;

console.log(unidade)