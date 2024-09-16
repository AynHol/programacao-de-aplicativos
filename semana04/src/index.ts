import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";
import read from 'readline-sync';
import Titular from "./Titular";
import Banco from "./Banco";

// var nome = read.question("Digite seu nome: ")
// var cpf = read.question("Digite seu CPF: ")
// var chavePix = read.question("Digite chave PIX: ")
// var t1 = new Titular(nome, cpf)

// console.log("Conta Normal")
// var cb1 = new ContaBancaria(t1, cpf)
// cb1.depositar(100)
// cb1.sacar(200)

// console.log(" ")
// console.log("---------------------")
// console.log(" ")

// console.log("Conta Corrente")
// var cc = new ContaCorrente(t1, cpf)
// cc.depositar(100)
// cc.sacar(200)

// console.log(" ")
// console.log("---------------------")
// console.log(" ")

// console.log("Conta Poupança")
// var cp = new ContaPoupanca(t1, cpf)

// ------------------------------------------------------------------------------------ //

var nabank = new Banco()

var opcao = 0
do {
    console.log("-------------Menu-------------")
    opcao = read.keyInSelect(["Criar Conta", "Transferencia", "Remover", "Mostrar"]) + 1
    switch (opcao) {
        case 1:
            nabank.addAccount()
            break
        case 2:
            nabank.transferir()
            break
        case 3:
            nabank.removerConta()
            break
        case 4:
            nabank.mostrarContas()
            break
    }
} while (opcao !== 0)