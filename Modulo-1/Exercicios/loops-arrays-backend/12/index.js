const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
let passarPessoaParaDentro;

for(let i = 0; i < filaDeFora.length; i++) {
    passarPessoaParaDentro = filaDeFora[i]

    if(filaDeDentro.length < 5){
      filaDeDentro.push(passarPessoaParaDentro)
    }
  }

console.log(filaDeDentro)
