//SetTimeOut(função, tempo ms) => Executa a função após o tempo
//SetInterval(função, tempo ms) => Executa a função diversas vezes com o intervalo de tempo determinado
//ClearInterval(função) => Encerra o loop do setInterval

//Array.Every(função) => Verifica se a informação passada na função condiz com TODOS os itens do array.
//Array.Some(função) => Verifica se a informação passada na função condiz com PELO MENOS 1 item do array.
//Array.find(função) => Retorna o primeiro elemento que condiz com a informação da função. caso não encontre, UNDEFINED
//Array.findIndex(função) => Retorna o ÍNDICE do primeiro elemento que condiz com a informação da função. caso não encontre, -1
//Array.filter(função) => Verifica quais itens do array condizem com a função e retorna um novo array com os resultados
//Array.map(função) => Executa os comandos da função para cada item do array e retorna um novo array com os resultados 

//Array.sort() => ordena o array ORIGINAL  baseado na tabela unicode. Em caso de array de numeros, passar uma função com 2 parametros que onde a - b = ordem crescente e b - a = ordem decrescente. Em caso de array de strings, passar uma função com 2 parametros que onde a.localeCompare(b) = ordem alfabetica (crescente), b.localeCompare(b) = oposto da ordem alfabetica (decrescente)

//Array.reduce() => MDN mozilla 

//EX:setTimeOut
const imprimir = () => {
  console.log("rodrigo");
}
setTimeout(imprimir, 6000)

//EX: setInterval e clearInterval
let numero = 1
const contador = setInterval(function() {
  console.log(numero);
  numero++

  if(numero === 3) {
    clearInterval(contador)
  }
}, 1000)

//EX: Every
const numeros = [1, 2, 3, 4];
const frutas = ["maça", "banana"];

const resultadoNumeros = numeros.every((numero) => {
  return numero < 5
  //verdadeiro, pois todos o números do array são menores que 5
})

const resultadofrutas = frutas.every((fruta) => {
  return fruta !== "banana"
  //falso, pois existe o item "banana" no array
})

//EXERCÍCIO 1 - EVERY
const usuario = [
  {nome: "joao", idade: 23},
  {nome: "carlihnho", idade: 18}
]

const verificarIdade = (objetoIdade) => {
  const resultado = objetoIdade.every((objeto) => {
    return objeto.idade >= 18
  })

  if(resultado) {
    console.log("Festa Liberada");
  } else {
    console.log("Festa proibida, Encontrado menor de idade");
  }
}

verificarIdade(usuario)

//EXERCÍCIO 2 - SOME
const arquivos = [
  "texte.txt",
  "Foto.png",
  "Virus.bat"
]

const VerificarVirus = (arrayVirus) => {
  const resultado = arrayVirus.some((virus) => {
    return virus.slice(-4) === ".bat"
  })

  if(resultado) {
    console.log("VIRUS!");
  } else {
    console.log("LIMPO");
  }
}

VerificarVirus(arquivos)

//EXERCÍCIO 3 - FIND
const carros = [
  { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
  { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
  { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
  { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' }
];

const buscarCarro = (marcaCarro, arrayCarros) => {
  const resultado = arrayCarros.find((carro) => {
    return carro.marca === marcaCarro
  })

  console.log(resultado);
}

buscarCarro("fiat", carros)

//EXERCÍCIO 4 - FILTER
const professores = [
  { nome: "Guido", "stack": "backend" },
  { nome: "Vidal", stack: "backend" },
  { nome: "Dani", stack: "frontend" },
  { nome: "Diego", stack: "frontend" },
  { nome: "Léo", stack: "backend" },
  { nome: "Ruli", stack: "frontend" },
]

const stack = (arrayProfessores) => {
  const resultadoBackEnd = arrayProfessores.filter((professorBackEnd) => {
    return professorBackEnd.stack === "backend"
  })

  const resultadoFrontEnd = arrayProfessores.filter((professorFrontEnd) => {
    return professorFrontEnd.stack === "frontend"
  })

  console.log(resultadoBackEnd);
  console.log(resultadoFrontEnd);
}

stack(professores)

//EXERCÍCIO 5 - MAP
const produtos = [
  { nome: "arroz", preco: 500 },
  { nome: "carne", preco: 3200 },
  { nome: "biscoito", preco: 450 },
  { nome: "banana", preco: 320 },
]

const produtosComDesconto = (arrayProdutos) => {
  const resultado = arrayProdutos.map((produto) => {
    return {
      nome: produto.nome,
      preco: produto.preco,
      precoComDesconto: produto.preco - (produto.preco * (10/100))
    }
  })

  console.log(resultado);
}

produtosComDesconto(produtos)