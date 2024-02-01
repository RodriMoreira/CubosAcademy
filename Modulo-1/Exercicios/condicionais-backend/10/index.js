const caractere = "1";

if(caractere === "a" || 
   caractere === "e" || 
   caractere === "i" || 
   caractere === "o" || 
   caractere === "u") {
  console.log("Vogal Minuscula")
} else if(
   caractere === "A" || 
   caractere === "E" || 
   caractere === "I" || 
   caractere === "O" || 
   caractere === "U") {
  console.log("Vogal Maiúscula")
} else if(caractere >= 0 || caractere <= 9) {
  console.log("Número")
} else {
  console.log("Consoante")
}