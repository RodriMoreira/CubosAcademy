const dadoCorrompido1 = "*Canis %lupus )familiaris";
const dadoCorrompido2 = "Felis) silvestris &catus&";
const dadoCorrompido3 = "$Ailuropoda@ melanoleuca!";

let dadoPurificado1 = ""
let dadoPurificado2 = ""
let dadoPurificado3 = ""

for(let dado of dadoCorrompido1) {
  if(dado !== "!" &&
     dado !== "@" &&
     dado !== "#" &&
     dado !== "$" &&
     dado !== "%" &&
     dado !== "&" &&
     dado !== "*" &&
     dado !== "(" &&
     dado !== ")"
    ) {
      dadoPurificado1 += dado
      } 
}

for(let dado of dadoCorrompido2) {
  if(dado !== "!" &&
     dado !== "@" &&
     dado !== "#" &&
     dado !== "$" &&
     dado !== "%" &&
     dado !== "&" &&
     dado !== "*" &&
     dado !== "(" &&
     dado !== ")"
    ) {
      dadoPurificado2 += dado
      } 
}

for(let dado of dadoCorrompido3) {
  if(dado !== "!" &&
     dado !== "@" &&
     dado !== "#" &&
     dado !== "$" &&
     dado !== "%" &&
     dado !== "&" &&
     dado !== "*" &&
     dado !== "(" &&
     dado !== ")"
    ) {
      dadoPurificado3 += dado
      } 
}

console.log(dadoPurificado1)
console.log(dadoPurificado2)
console.log(dadoPurificado3)