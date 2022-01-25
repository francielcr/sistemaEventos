let qtdParticipantes = 7
if (qtdParticipantes<100) {
    console.log("Permitir Cadastro!")
} else {
    console.log("Não Permitir Cadastro! Limite excedido.")
}
let hoje = new Date().toDateString()
let dataEvento = new Date('01/27/2022').toDateString()  // A data informada estar no padrão norte americano MM/DD/AAAA

if (dataEvento > hoje) {
    console.log("Permitir Cadastro!")
} else {
    console.log("Não Permitir Cadastro! Data inválida.")
}

let idadeParticipante = 32
if (idadeParticipante >= 18 ) {
    console.log("Permitir Cadastro!")
} else {
    console.log("Não Permitir Cadastro! Idade insuficiente.")
}

let listaParticipante = ["João Silva", "Pedro Sousa", "Jessica Bianca", "Andressa Morais", "Gabriel Batista" , "Hugo Sousa", "Diego Alves"]
if (listaParticipante.length < 100) {
    console.log("Os participantes cadastrados são:", listaParticipante)
} else {
    console.log("Não Permitir Cadastro! Limite de participantes excedido.")
}