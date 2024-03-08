let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function identificadorCorrigido(identificador) {
  let identificadorCorrigido = identificador.padStart(6, "0")
  return console.log(identificadorCorrigido);
}

function nomeCapitalizado(nome) {
  let palavras = nome.split(" ")
  let palavrasCapitalizadas = []

  for(palavra of palavras) {
    palavrasCapitalizadas.push(palavra.charAt(0).toUpperCase() + palavra.slice(1))
  }

  return console.log(palavrasCapitalizadas.join(" "));
}


function emailCorrigido(email) {
  return console.log(email.trim());
}
identificadorCorrigido(identificador)
nomeCapitalizado(nome)
emailCorrigido(email)


