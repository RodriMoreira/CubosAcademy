let primeiroNome = "José"; //string 
const segundoNome = "Moreira"; //string

let num1 = 3_000_000_000; //number



{
  var num = 10; //var é de escopo global, não utilizar.
  let num2 = 20; //escopo local
}

let lista = [1,2,30]
//Declaração da variavel que irá conter a menor idade permitida
let menorIdadePermitida = Infinity

//laço de repetição que verifica qual a menor idade permitida
for(idade of lista) {
  if(idade >= 18 && idade <= menorIdadePermitida) {
    menorIdadePermitida = idade
  } 
}

//Condicional que analisa se existe algum elemento com a menor idade permitida
if(menorIdadePermitida === Infinity) {
    console.log("CRESCA E APARECA")
} else {
    console.log(menorIdadePermitida)
}

