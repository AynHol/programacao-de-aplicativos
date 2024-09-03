import Titular from "./Titular"

export default class ContaBancaria {
    constructor(chavePix: string) {
        this.numero = String(Math.floor((Math.random() * 89999) + 10000))
        this.saldo = 0
        this.titular = new Titular("Carlos", "XXX.XXX.XXX-XX")
        this.chavePix = chavePix
        this.dataCriacao = new Date()
    }

    private numero: string
    private saldo: number
    private titular: Titular
    private chavePix: string
    private dataCriacao: Date

    public getNumero(): string {
        return this.numero
    }

    public setNumero(numero: string): void {
        this.numero = numero
    }

    public setSaldo(valor: number): void {
        this.saldo = valor
    }

    public getSaldo(): number {
        return this.saldo
    }

    public mostrarDadosConta() {
        console.log(" ")
        console.log("---- Dados Conta ----")
        console.log(" ")
        console.log(`Nome titular: ${this.titular.getNome()}`)
        console.log(`CPF titular: ${this.titular.getCPF()}`)
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