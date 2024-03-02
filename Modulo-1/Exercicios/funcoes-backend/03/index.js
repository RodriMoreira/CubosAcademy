const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 30
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 50
        }
    ],

    imprimirResumo: function() {    
        console.log(`Cliente: ${this.nomeDoCliente} \n Total de itens: ${this.calcularTotalItens()} \n Total a pagar: ${this.calcularPrecoFinal()} `)
    },

    imprimirResumoDetalhado: function() {
    
        function ItensDetalhados() {
            let texto = ``
            for(let i = 0; i < carrinho.produtos.length; i++) {
                texto += `Item: ${i + 1} - ${carrinho.produtos[i].nome} - ${carrinho.produtos[i].qtd} - R$ ${carrinho.produtos[i].precoUnit.toFixed(2)}\n`
            }
           return texto
        }
        let textoDetalhado = `Cliente: ${this.nomeDoCliente}\n\n${ItensDetalhados()}\nTotal de itens: ${this.calcularTotalItens()}\nTotal a pagar: ${this.calcularPrecoFinal()}`
        console.log(textoDetalhado)
    },

    addCarrinho: function(produto) {
        this.produtos.push(produto)
    },

    calcularTotalItens: function() {
        let quantidadeItens = 0
        for(let i = 0; i < this.produtos.length; i++) {
            quantidadeItens += this.produtos[i].qtd
        }
        return quantidadeItens
    },

    calcularPrecoFinal: function() {
        let precoFinal = 0
        for(let i = 0; i < this.produtos.length; i++) {
            precoFinal += this.produtos[i].precoUnit * this.produtos[i].qtd
        }
        return precoFinal.toFixed(2);
    },

    calcularDesconto: function() {
        let descontoPorQuantidade = 0
        let descontoPorValorTotal = 0
        let maiorDesconto = 0
        let menorValor = Infinity

        if(this.calcularPrecoFinal() > 100) {
            descontoPorValorTotal = this.calcularPrecoFinal() * 10 / 100
        }

        if(this.calcularTotalItens() > 4) {
            for(let i = 0; i < carrinho.produtos.length; i++) {
                if(carrinho.produtos[i].precoUnit < menorValor){
                    descontoPorQuantidade = carrinho.produtos[i].precoUnit
                }
            }
        }

        if(descontoPorQuantidade > descontoPorValorTotal){
            maiorDesconto = descontoPorQuantidade
        } else {
            maiorDesconto = descontoPorValorTotal
        }

        console.log(`Maior desconto = ${maiorDesconto.toFixed(2)} \nValor Atual = ${this.calcularPrecoFinal()} \nValor COM desconto = ${(this.calcularPrecoFinal() - maiorDesconto).toFixed(2)} `)
    }
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 100
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 50
}

carrinho.addCarrinho(novoTenis)
carrinho.addCarrinho(novaBermuda)
carrinho.calcularDesconto()