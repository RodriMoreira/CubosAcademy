//Função que imprime olá mundo

function imprimirOlaMundo() {
  console.log("Olá mundo")
}

//Função que imprime um cumprimento a alguem

function cumprimentar(pessoa, idade) {
  console.log(`olá, ${pessoa}! você tem ${idade} anos.`)
}

cumprimentar("josé", 25)

//Função que verifica que verifica se a pessoa é maior de idade e retorna um valor

function verificarMaioridade(idade) {
  if(idade >= 18) {
    return true;
  } else {
    return false;
  }
}

const valorRetornadoFunction = verificarMaioridade(20)
console.log(valorRetornadoFunction)

//Arrow function

const soma = (x,y) => {
  return x + y;
}

console.log(soma(8,5))

//Métodos = Função dentro de um objeto

const pessoa1 = {
  nome: "José",
  apresentar: function () {
    console.log(`meu nome é ${this.nome}`)
  }
}

pessoa1.apresentar()