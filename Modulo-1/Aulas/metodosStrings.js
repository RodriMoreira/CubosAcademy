//METODOS DE STRINGS QUE ESPERAM TEXTOS NÃO PODEM RECEBER NUMEROS COMO ARUMENTO
const texto = "Cubos academy"

//transforma o argumento em string
String(texto)

//Tamanho da string
texto.length;

//Achar um texto dentro de uma string gera um BOOLEAN
//string.includes(texto, [posição])
texto.includes("Cubos");

//Encontrar o PRIMEIRO texto dentro de uma string, gera um valor referente ao índice, -1 == Não encontrado
//string.indexOf(texto, [posição])
texto.indexOf("Cubos");

//Encontrar o ULTIMO texto dentro de uma string, gera um valor referente ao índice, -1 == Não encontrado
//LastIndex faz a busca de trás para frente, tomar CUIDADO com o parâmetro de posição
//string.indexOf(texto, [posição])
texto.lastIndexOf("Cubos");

//Recortar e armazenar um pedaço de uma string
//string.slice(posição 1, [posição 2])
//Números negativos fazem a busca de trás para frente
texto.slice(0)

//Transformar texto em array
//EX: Jósé Messias Pereira ==> ["José", "Messias", "Pereira"]
const array = texto.split("")

//Substitui a palavra da posição 1 pela palavra da posição 2
texto.replace("Cubos", "cubos")
//Função que consegue substituir todas as palavras "antigas" por palavras "Novas", já que o replace só funciona com a primeira palavra encontrada, a função repete o replace até substituir todas
function replaceAll(textoOriginal, textoAntigo, textoNovo) { 
  while (textoOriginal !== textoOriginal.replace(textoAntigo, textoNovo)) {
    textoOriginal = textoOriginal.replace(textoAntigo, textoNovo)
  }  
}

//Transforma as letras de uma string em letras maiusculas
texto.toUpperCase()

//Transforma as letras de uma string em letras minusculas
texto.toLowerCase()

//remove espaços no começo e no fim da string
texto.trim()

//PadStart preenche a string com um texto escolhido
//.padStart(tamanho que a string deve ter, "Texto que vai entrar na string até atingir o tamanho")
texto.padStart(1, "")

const ultimosQuatroDigitosCartao = "2345";
const numeroCartaoOculto = ultimosQuatroDigitosCartao.padStart(19, "**** ")

function imprimirData(dia, mes, ano)  {
  const diaFormulado = String(dia).padStart(2, "0")
  const mesFormulado = String(mes).padStart(2, "0")

  console.log(`${diaFormulado}/${mesFormulado}/${ano}`);
}

imprimirData(1,1,2001)