const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const filtro = (array) => {
  const nomes = array.filter((nome) => {
    return nome.charAt(0) === "a" || nome.charAt(0) === "A"
  })

  console.log(nomes);
}

filtro(nomes)