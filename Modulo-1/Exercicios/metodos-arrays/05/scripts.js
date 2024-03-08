const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atenderPaciente(pacientes) {
  pacientes.shift()
  console.log(pacientes);
}

function agendarPaciente(pacientes) {
  pacientes.push()
  console.log(pacientes);
}

function cancelarPaciente(paciente, nome) {
  const indice = paciente.indexOf(nome)
  paciente.splice(indice, 1)

  console.log(paciente);
}

cancelarPaciente(pacientes, "Pedro")