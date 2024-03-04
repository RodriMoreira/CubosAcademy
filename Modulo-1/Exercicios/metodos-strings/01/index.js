const comentario = "Esse CoViD é muito perigoso!";
ProibirPalavra(comentario)


function ProibirPalavra(string) {
  const stringFormatada = string.toLowerCase()

  if(stringFormatada.includes("covid") || stringFormatada.includes("pandemia")){
    console.log("Comentário bloqueado por conter palavras proibidas");
  } else {
    console.log("Comentário autorizado");
  }
}