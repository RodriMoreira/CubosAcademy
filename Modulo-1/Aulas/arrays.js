let nomesAlunos =  ["José", "Maria", "Pedro"]

let x = 3 //Quando utilizado com ++x ou --x é possivel percorrer o array

nomesAlunos[0] = "Carla"
nomesAlunos[1] = "Rodrigo"
nomesAlunos[2] = "Ruan"
nomesAlunos[x] = "Renan"

//Utilizado para adicionar algo no FINAL do array
nomesAlunos[nomesAlunos.length] = "Julio" 
nomesAlunos.push("Julio2")

//Utilizado para remover o ÚLTIMO elemento do array
nomesAlunos.pop()//Tambem retorna o elemento, é possivel armazenar isso dentro de uma variável


//Utilizado para colocar um novo conteúdo no COMEÇO do array
nomesAlunos.unshift("Carla0")

//Utilizado para remover o PRIMEIRO elemento do array
nomesAlunos.shift() //Tambem retorna o elemento, é possivel armazenar isso dentro de uma variável

//Exercício resolvido 0
let paises = ["Brasil", "Argentina", "Canada", "China", "Russia"];

paises.push("Japão");
console.log(paises);
paises.pop();
console.log(paises);
paises.unshift("Chile");
console.log(paises);
paises.shift();
console.log(paises);

let ultimoIndice = paises.length - 1

console.log(paises[ultimoIndice])
console.log(paises[1])
console.log(paises[2])

//Desestruturação de array

const array =  [1,2,3,4,5,6]

const [a, b, ...resto] = array
console.log(a,b,resto)