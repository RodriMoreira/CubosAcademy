const ladoA = 12;
const ladoB = 6;

if((ladoA !== ladoB) && (ladoA + ladoB <= 12)) {
  console.log("Não é uma bucha")
} else if(ladoA == 0) {
  console.log("Bucha de BRANCO")
} else if(ladoA == 1) {
  console.log("Bucha de ÁS")
} else if(ladoA == 2) {
  console.log("Bucha de DUQUE")
} else if(ladoA == 3) {
  console.log("Bucha de TERNO")
} else if(ladoA == 4) {
  console.log("Bucha de QUADRA")
} else if(ladoA == 5) {
  console.log("Bucha de QUINA")
} else if(ladoA == 6) {
  console.log("Bucha de SENA")
} else {
  console.log("Valor inválido")
}