const cpf = "12345678900";
const cnpj = "12345678900199";


function FormatarCPF(cpf) {
  if(cpf.length !== 11) {
    console.log("CPF inválido");
  } else {
    const formatarCPF = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}--${cpf.slice(9,11)}`
    console.log(formatarCPF);
  }
}

function FormatarCNPJ(cnpj) {
  if(cnpj.length !== 14) {
    console.log("CNPJ inválido");
  } else {
    const FormatarCNPJ = `${cnpj.slice(0,2)}.${cnpj.slice(2,5)}.${cnpj.slice(5,8)}/${cnpj.slice(8,12)}-${cnpj.slice(12,14)}`
    console.log(FormatarCNPJ);
  }
}

FormatarCPF(cpf)
FormatarCNPJ(cnpj)


