const texto = "Cubos academy"

//Tamanho da string
texto.length;

//Achar um texto dentro de uma string gera um BOOLEAN
//string.includes(texto, [posição])
texto.includes("Cubos");

//Encontrar o PRIMEIRO texto dentro de uma string, gera um valor referente ao índice, -1 == false
//string.indexOf(texto, [posição])
texto.indexOf("Cubos");

//Encontrar o ULTIMO texto dentro de uma string, gera um valor referente ao índice, -1 == false
//LastIndex faz a busca de trás para frente, tomar CUIDADO com o parâmetro de posição
//string.indexOf(texto, [posição])
texto.lastIndexOf("Cubos");