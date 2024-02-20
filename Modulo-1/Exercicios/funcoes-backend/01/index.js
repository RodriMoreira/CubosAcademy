const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let questoesAcertadas = 0
let nota = 0


function corrigirProva() {
    for(let i = 0; i < prova.questoes.length; i++) {
       if(prova.questoes[i].resposta === prova.questoes[i].correta) {
        questoesAcertadas++
        nota += 2
       }
    }

    let resultado = `O aluno(a) ${prova.aluno}, acertou ${questoesAcertadas} e obteve nota ${nota}`
    console.log(resultado)
} 

corrigirProva(prova)