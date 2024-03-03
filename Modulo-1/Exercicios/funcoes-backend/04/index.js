const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],

  depositar: function(valor) {
   contaBancaria.saldo += (valor / 100)

    let historicoDeposito = {tipo: "Depósito", valor: valor}
    contaBancaria.historicos.push(historicoDeposito)

    return console.log(`Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}`);
  },

  sacar: function (valor) {
    if ((valor / 100) > this.saldo) {
      console.log("Saldo insuficiente");  
    } else {
      contaBancaria.saldo -= (valor / 100)

      let historicoSaque = {tipo: "Saque", valor: valor}
      contaBancaria.historicos.push(historicoSaque)
      console.log(`Saque de R$${valor / 100} realizado para o cliente: ${contaBancaria.nome}`);
    }
  },

  extrato: function ()  {
    let textoExtrato = `Extrato de ${contaBancaria.nome} - Saldo: R$${contaBancaria.saldo} \nHistórico: ${contaBancaria.historicos}`
    console.log(textoExtrato);
  }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.saldo);
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.saldo);
