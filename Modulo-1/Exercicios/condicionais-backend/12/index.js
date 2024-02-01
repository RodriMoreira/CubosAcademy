const diaDaSemana = 3;

if(diaDaSemana < 1 || diaDaSemana > 7){
 console.log("Valor inválido")
} else if(diaDaSemana === 1) {
  console.log("Segunda")
} else if(diaDaSemana === 2) {
  console.log("Terça")
} else if(diaDaSemana === 3) {
  console.log("Quarta")
} else if(diaDaSemana === 4) {
  console.log("Quinta")
} else if(diaDaSemana === 5) {
  console.log("Sexta")
} else if(diaDaSemana === 6) {
  console.log("Sábado")
} else if(diaDaSemana === 7) {
  console.log("Domingo")
} else {
  console.log("ERROR")
}