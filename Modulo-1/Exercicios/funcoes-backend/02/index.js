const carro = {
  ligado: false,
  velocidade: 0,
  status: function() {
    return this.ligado ? "Ligado" : "Desligado"
  },
  statusEVelocidade: function() {
    console.log(`Carro ${this.status()}, velocidade: ${this.velocidade}`);
  },
  ligar: function ligarCarro() {
    if(this.ligado) {
      console.log("Já ligado")
    } else {
      this.ligado = true
      console.log("ligando carro...");
      this.statusEVelocidade()
    }
  },
  desligar: function() {
    if(this.ligado) {
      console.log("Desligando carro...");
      this.ligado = false
      this.velocidade = 0
      this.statusEVelocidade()
    } else {
      console.log("Carro já desligado");
    }
  },
  acelerar: function() {
    if(this.ligado) {
      this.velocidade += 10
      this.statusEVelocidade()
    } else {
      console.log("Não é possível acelerar um carro desligado");
    }
  },
  desacelerar: function() {
    if(this.ligado) {
      if(this.velocidade == 0) {
        console.log("Carro já está parado");
      } else{
        this.velocidade -= 10
        this.statusEVelocidade()
      }
    } else {
      console.log("Não é possível acelerar um carro desligado");
    }
  }
}

carro.ligar()

