const cpf = "12.345.678/9001-99";

function formatar(texto) {
  while(texto !== texto.replace(".", "")) {
    texto = texto.replace(".", "")
  }

  while(texto !== texto.replace("-", "")) {
    texto = texto.replace("-", "")
  }

  while(texto !== texto.replace("/", "")) {
    texto = texto.replace("/", "")
  }

  return console.log(texto);
}

formatar(cpf)