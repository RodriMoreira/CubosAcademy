const endereços = [
  { cep: 12111222, rua: "Rua dos Artistas" },
  { cep: 34111333, rua: "Rua Augusta" },
  { cep: 76222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const buscarEndereco = (array, cep) => {
  const arrayEndereco = array.find((endereco) => {
    return endereco.cep === cep
  })

  console.log(arrayEndereco.rua);
}

buscarEndereco(endereços, 12111222)