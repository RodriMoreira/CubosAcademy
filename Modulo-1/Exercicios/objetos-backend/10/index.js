const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho = {
  item: [tv, caboUsb, caboUsb, webcam],
  quantidade: 4
}

carlos.carrinho = {
  item: [notebook, notebook],
  quantidade: 2
}

patricia.carrinho = {
  item: [teclado, caboUsb, caboUsb, carregador, mouse, monitor],
  quantidade: 6
}

renato.carrinho = {
  item: [webcam, webcam, webcam, webcam, webcam],
  quantidade: 5
}

roberto.carrinho = {
  item: [webcam, caboUsb, caboUsb, monitor],
  quantidade: 4
}
