let valorItem = 129.99;
let meuDinheiro = 80;

let valorDesconto =  valorItem - meuDinheiro;
let PorcentagemDesconto = (valorDesconto / valorItem) * 100;

console.log(`A porcentagem necessária é aproximadamente ${Math.round(PorcentagemDesconto)}%`)
