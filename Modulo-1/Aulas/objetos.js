const pessoa = {
  nome: "José",
  altura: 1.80, //Metros
  peso: 80, //KG
  carro: {
    marca: "Toyota"
  }
}

pessoa.nome = "Pedro"
pessoa["altura"] = 2.00

//Desestruturação de objeto

// const nome = pessoa.nome
// const idade = pessoa.nome

const{nome, idade, ...outros} = pessoa;
console.log(nome, idade)
console.log(outros)

//Exercicio 1
const dados = {
  nome: "Rodrigo Moreira",
  idade: 18,
  temCNH: true,
  apelido: ["Pedrinho", "Pedro"]
}

let textoCNH = pessoa.temCNH ? "possui CNH" : "Não possui CNH"

console.log(dados.nome, dados.idade, textoCNH, dados.apelido[1])