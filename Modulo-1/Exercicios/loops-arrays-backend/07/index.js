const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let nomesLetraA = [];

for(let nome of nomes) {
  if(nome[0] === "A" || nome[0] === "a"){
    nomesLetraA.push(nome)
  }
}
console.log(nomesLetraA)