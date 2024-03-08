const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function listaDePacientes(pacientes,operacao,nome) {

  if(operacao == "agendar") {
    pacientes.push(nome)
  } 

  if(operacao == "atender") {
    pacientes.shift()
  } 

  console.log(pacientes.join(", "));
}

listaDePacientes(pacientes, "atender")
listaDePacientes(pacientes, "agendar", "rodrigo")
listaDePacientes(pacientes, "atender")