const celular = "2199918888";

function formatarNumeroCelular(celular) {
  let numeroFormatado = ""

  if(celular.length == 8) {
    numeroFormatado += `9 ${celular.slice(0, 4)}-${celular.slice(4, 8)}`

  } else if(celular.length == 10) {
    numeroFormatado += `(${celular.slice(0, 2)}) 9 ${celular.slice(2, 6)}-${celular.slice(6, 10)}`
  }

  return console.log(numeroFormatado);
}

formatarNumeroCelular(celular)