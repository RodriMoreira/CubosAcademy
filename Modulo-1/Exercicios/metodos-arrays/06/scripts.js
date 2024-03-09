const usuarios = [
  {
      nome: "João",
      pets: ["Max"],
  },
  {
      nome: "Ana",
      pets: ["Pingo", "Lulu"],
  },
  {
      nome: "Beatriz",
      pets: ["Lessie"],
  },
  {
      nome: "Carlos",
      pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
      nome: "Antonio",
      pets: ["Naninha"],
  },
]

function acharPet(lista, pet) {
  let localizar = false

  for(let i = 0; i < lista.length; i++) {
    let nomeDono = ""
    localizar = lista[i].pets.includes(pet)
    if(localizar) {
      nomeDono = lista[i].nome
      console.log(`O dono(a) do(a) ${pet} é o(a) ${nomeDono}`);
      break
    }
  }

  if(!localizar) {
    console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
  }
}

acharPet(usuarios, "caramelo")