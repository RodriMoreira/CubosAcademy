const jogador1 = "tesoura"
const jogador2 = "tesoura"

if((jogador1 == "pedra" && jogador2 == "papel") ||
   (jogador1 == "papel" && jogador2 == "tesoura") ||
   (jogador1 == "tesoura" && jogador2 == "pedra")) {
    //Jogador1 PERDEU
    console.log("O jogador 2 ganhou!")
} else if (jogador1 === jogador2) {
    //Empate
  console.log("Empate entre os jogadores!")
} else {
    //Jogador 1 GANHOU
  console.log("O jogador 1 ganhou!")
}