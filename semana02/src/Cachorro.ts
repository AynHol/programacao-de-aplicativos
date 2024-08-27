import Dono from "./Dono"

export default class Cachorro {
    constructor(nome: String, raca: String, cor: String, tamanho: String, dono: Dono) {
        this.nome = nome
        this.raca = raca
        this.cor = cor
        this.tamanho = tamanho
        this.dono = dono
    }

    nome: String
    raca: String
    cor: String
    tamanho: String
    dono: Dono

    exibirCachorro() {
        console.log(`O cachorro ${this.nome} é da raça ${this.raca}, da cor ${this.cor} e do tamanho ${this.tamanho}.`)
    }

    exibirDono() {
        console.log(`O dono do ${this.nome} é ${this.dono.nome}, telefone: ${this.dono.telefone}`)
    }
}