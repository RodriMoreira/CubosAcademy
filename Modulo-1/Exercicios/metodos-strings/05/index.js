const numeroCartao = '1111222233335555';

function esconderNumero(numeroCartao) {
  let numeroAlterado = ""
  const primeirosNumeros = numeroCartao.slice(0, 4);
  const ultimosNumeros = numeroCartao.slice(-4);
  
  numeroAlterado += primeirosNumeros + numeroAlterado.padEnd(8, "*") + ultimosNumeros
  return console.log(numeroAlterado);
}

esconderNumero(numeroCartao)