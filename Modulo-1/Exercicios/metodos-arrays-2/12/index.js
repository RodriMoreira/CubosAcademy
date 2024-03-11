const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

const filtro = (array) => {
  const programadores = array.filter((pessoa) => {
    return pessoa.profissao === "Programador" && pessoa.idade > 20
  })

  const jornalista = array.filter((pessoa) => {
    return pessoa.profissao === "Jornalista" && pessoa.idade > 30
  })
  
  console.log(programadores);
  console.log(jornalista);
}

filtro(pessoas)