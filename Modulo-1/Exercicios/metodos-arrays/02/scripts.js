const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function separarGrupo(nomes, numero) {
  let numeroGrupo = 1
  for(let i = 0; i < nomes.length; i += numero) {
    const grupo = `Grupo ${numeroGrupo}: ${nomes.slice(i, (i + numero)).join(", ")}`
    console.log(grupo);
    numeroGrupo++
  }
}

separarGrupo(nomes, tamanhoDoGrupo)