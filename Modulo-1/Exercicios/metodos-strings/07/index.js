const email = "aluno@cubos.academy";

function formatarEmail(email) {
  let confirmacao = ""
  const verificacao = email.includes("@") && 
                      email.includes(".") &&
                      !(email.includes(" ")) &&
                      !(email.charAt(0) == ".") &&
                      !(email.charAt(email.length - 1) == ".")

  if(verificacao) {
    confirmacao = "Email Válido"
  } else {
    confirmacao = "Email inválido"
  }

  return console.log(confirmacao);
}

formatarEmail(email)


