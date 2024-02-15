const usuarios = [
  {
      nome: "João",
      idade: 25,
      maior_idade: true
  },
  {
      nome: "Ana",
      idade: 18,
      maior_idade: true
  },
  {
      nome: "Beatriz",
      idade: 15,
      maior_idade: true
  },
  {
      nome: "Carlos",
      idade: 16,
      maior_idade: true
  },
  {
      nome: "Antonio",
      idade: 32,
      maior_idade: true
  },
]

for(let i = 0; i < usuarios.length; i++){
  if(usuarios[i].idade >= 18) {
    usuarios[i].maior_idade = true
  } else {
    usuarios[i].maior_idade = false
  }
}
console.log(usuarios)