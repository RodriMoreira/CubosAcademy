const usuario = {
  nome: "João",
  idade: 25,
  profissao: "programador",
  cor_preferida: "verde",
};

const {nome, idade, profissao, cor_preferida} = usuario;
const texto = `Olá... Eu sou ${nome}, tenho ${idade} anos de idade. Minha profissão é ${profissao} e minha cor preferida é ${cor_preferida}`

console.log(texto)