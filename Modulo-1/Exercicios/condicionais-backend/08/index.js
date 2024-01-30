const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if((idade < 12 || idade > 65) || (possuiPatologia === true) || (altura < 150)) {
  console.log("ACESSO NEGADO")
} else if((ehEstudante === true) || idade < 18) {
  console.log("Preço: MEIA-ENTRADA 10 REAIS")
} else {
  console.log("Preço: 20 REAIS")
}