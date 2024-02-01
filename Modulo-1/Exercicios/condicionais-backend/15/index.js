const primeiroNome = "";
const sobrenome = "";
const apelido = "CARRO";

if(!!primeiroNome && !!sobrenome) {
  console.log(primeiroNome + " " + sobrenome)
} else if(!!primeiroNome) {
  console.log(primeiroNome)
} else if((!primeiroNome && !sobrenome) && !!apelido) {
  console.log(apelido)
}
