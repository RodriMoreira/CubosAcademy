const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30_000; //emREAIS

if((aposentada || portadoraDeDoenca) === true) {
  console.log("ISENTA")
} else if(totalDeRendimentos <= 28_559.70) {
  console.log("VAZA LEAO!")
} else {
  console.log("PEGA LEAO!")
}