const nome = 'Guido Cerqueira';

function criarNick(nome) {
  let array = []
  let nickname = ""

  while(nome !== nome.replace(" ", "")) {
    nome = nome.replace(" ", "")
  }

  nome.toLowerCase()
  const nomeCorrigido = nome.slice(0, 12)

  array = nomeCorrigido.split(" ")
  array.unshift("@")

  nickname = array.join("")
  
  return console.log(nickname);
}

criarNick(nome)
