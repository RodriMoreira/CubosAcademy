const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontrarCarro(nome, numero) {
  const carros = nome.slice(numero, (numero + 3)).join(" - ")
  console.log(carros);
}

encontrarCarro(nomes,posicao)