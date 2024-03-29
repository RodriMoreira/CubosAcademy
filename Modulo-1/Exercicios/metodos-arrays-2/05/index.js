const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

const filtro = (array) => {
  const idade = array.filter((pessoa) => {
    return pessoa.idade >= 18 && pessoa.idade <= 65
  })

  const habilitado = idade.every((habilitacao) => {
    return habilitacao.habilitado === true
  })

  if (habilitado) {
    console.log("Todos estão habilidatos");
  } else {
    console.log("INVALIDO");
  }
}

filtro(usuarios)