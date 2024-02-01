//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if((idadeDoAluno < 18 && possuiResponsavel === true) || idadeDoAluno > 18){
  console.log("É possivel realzar a matricula")
} else {
  console.log("Não foi possivel realizar a matricula")
}