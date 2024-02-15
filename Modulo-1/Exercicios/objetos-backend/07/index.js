const livro = {
  nome: 'O poder do hábito',
  capitulos: [
      {
          nome: "O loop do hábito",
          numero: 0,
      },
      {
          nome: "O cérebro ansioso",
          numero: 0,
      },
      {
          nome: "A regra de ouro da mudança de hábito",
          numero: 0,
      },
      {
          nome: "Hábitos angulares, ou a balada de Paul O`neill",
          numero: 0,
      },
      {
          nome: "Starbucks e o hábito do sucesso",
          numero: 0,
      },
      {
          nome: "O poder de uma crise",
          numero: 0,
      },
      {
          nome: "Como a target sabe o que você quer antes que você saiba",
          numero: 0,
      },
      {
          nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
          numero: 0,
      },
      {
          nome: "A neorologia do livre-arbítrio",
          numero: 0,
      },
  ]
}

for(let i = 0; i < livro.capitulos.length; i++){
  livro.capitulos[i].numero = i + 1
}

console.log(livro.capitulos)