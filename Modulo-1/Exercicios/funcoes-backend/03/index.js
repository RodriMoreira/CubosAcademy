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
        console.log(`Cliente: ${this.nomeDoCliente} \n Total de itens: ${this.calcularTotalItens()} \n Total a pagar: ${this.CalcularPrecoFinal()} `)
    },

    imprimirResumoDetalhado: function() {
    
        function ItensDetalhados() {
            let texto = ``
            for(let i = 0; i < carrinho.produtos.length; i++) {
                texto += `Item: ${i + 1} - ${carrinho.produtos[i].nome} - ${carrinho.produtos[i].qtd} - R$ ${carrinho.produtos[i].precoUnit.toFixed(2)}\n`
            }
           return texto
        }
        let textoDetalhado = `Cliente: ${this.nomeDoCliente}\n\n${ItensDetalhados()}\nTotal de itens: ${this.calcularTotalItens()}\nTotal a pagar: ${this.CalcularPrecoFinal()}`
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

    CalcularPrecoFinal: function() {
        let precoFinal = 0
        for(let i = 0; i < this.produtos.length; i++) {
            precoFinal += this.produtos[i].precoUnit * this.produtos[i].qtd
        }
        return precoFinal.toFixed(2)
    },


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
carrinho.imprimirResumoDetalhado()
