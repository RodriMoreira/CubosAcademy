const nomeArquivo = 'Foto da Familia.png';

function Arquivo(arquivo) {
  let tipoArquivo = ""
  const verificacao = arquivo.includes(".jpg") ||
                      arquivo.includes(".jpeg") ||
                      arquivo.includes(".gif") ||
                      arquivo.includes(".png") 

  if(verificacao) {
    tipoArquivo = "arquivo válido"
  } else {
    tipoArquivo = "arquivo inválido" 
  }

  return console.log(tipoArquivo);
}

Arquivo(nomeArquivo)