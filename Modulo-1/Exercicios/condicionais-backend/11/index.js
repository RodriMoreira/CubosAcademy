//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 3_000_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

const rendaMensalEmReais = rendaMensalEmCentavos / 100
const totalJaPagoPeloAlunoEmReais = totalJaPagoPeloAluno / 100
const valorParcela = rendaMensalEmReais * (18/100)
const mesesTotais = 60
const quantidadePagaDaMensalidade = valorParcela * mesesDecorridos


if(mesesDecorridos >= mesesTotais) {
  console.log("Mensalidade ISENTA")
} else if(quantidadePagaDaMensalidade >= 18000) {
  console.log("Todas as parcelas estão pagas")  
} else if(rendaMensalEmReais >= 2000) {
  console.log(`Mensalidade de ${valorParcela}$`)
} else if(rendaMensalEmReais < 2000){
  console.log("Valor da mensalidade ZERADO, pois a renda do aluno está abaixo do valor mínimo")
} else{
  console.log("ERROR")
}