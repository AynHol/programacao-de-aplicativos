import Titular from "./Titular"

export default class ContaBancaria {
    constructor(chavePix: string) {
        this.numero = String(Math.floor((Math.random()* 89999) + 10000))
        this.saldo = 0
        this.titular = new Titular("Carlos", "XXX.XXX.XXX-XX")
        this.chavePix = chavePix
        this.dataCriacao = new Date()
    }

    numero: string
    saldo: number
    titular: Titular
    chavePix: string
    dataCriacao: Date

    mostrarDadosConta(){
        console.log("----Dados Conta----")
        console.log(`Nome titular: ${this.titular.nome}`)
        console.log(`CPF titular: ${this.titular.cpf}`)
        console.log(`Data criação: ${this.dataCriacao}`)
        console.log(`Número conta: ${this.numero}`)
        console.log(`Chave PIX: ${this.chavePix}`)
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`)
    }

    depositar(valor: number) {
        if (valor <= 0) {
            console.log("Valor do depósito é inválido!")
        } else {
            this.saldo = this.saldo + valor
            console.log(`Depósito de R$ ${valor} realizado com sucesso. O saldo atual é R$ ${this.saldo}`)
        }
    }

    sacar(valor: number) {
        if (valor > this.saldo || valor <= 0) {
            console.log("Saldo insuficiente para saque!")
            return
        }
        this.saldo -= valor
        console.log(`Saque de R$ ${valor} realizado com sucesso. O saldo atual é R$ ${this.saldo}`)
    }

    consultarSaldo() {
        console.log(`Seu saldo é de R$ ${this.saldo}`)
    }
}