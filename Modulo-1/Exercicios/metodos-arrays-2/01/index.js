const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function encontrarLivro(array, nomeDoLivro) {
  const posicaoLivro = array.indexOf(nomeDoLivro) + 1

  console.log(`O livro está na posição ${posicaoLivro}`);
}

encontrarLivro(livros, nomeDoLivro)