import ContaBancaria from "./ContaBancaria";
import read from 'readline-sync'
import Titular from "./Titular";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

export default class Banco {
    private contas: ContaBancaria[] = []

    public transferir() {
        var numeroDigitado = read.question("Digite o numero da conta de origem: ")
        var indexOrigem = this.contas.findIndex(conta => conta.getNumero() === numeroDigitado)

        var valorTransferencia = read.questionFloat("Digite o valor da transferencia: ")
        if (valorTransferencia > this.contas[indexOrigem].getSaldo() || valorTransferencia <= 0) {
            console.log("Saldo insuficiente para transferencia!")
            return
        }

        var numeroDigitado2 = read.question("Digite o numero da conta de destino: ")
        var indexDestino = this.contas.findIndex(conta => conta.getNumero() === numeroDigitado2)

        this.contas[indexOrigem].sacar(valorTransferencia)
        this.contas[indexDestino].depositar(valorTransferencia)

        // Buscar a conta de origem da transferencia
            // Pedir valor da transferencia
            // Verificar se tem saldo
        // Buscar a conta de destino da transferencia

        // Sacar da conta de origem
        // Depositar conta de destino
    }

    private save(conta: ContaBancaria) {
        this.contas.push(conta)
        console.log(`Conta com número: ${conta.getNumero()} foi criada com sucesso!`)
    }

    public mostrarContas() {
        console.table(this.contas)
    }

    public addAccount() {
        var nome = read.question("Digite seu nome: ")
        var cpf = read.question("Digite seu CPF: ")
        var chavePix = read.question("Digite chave PIX: ")
        var tipoConta = read.keyInSelect(["Corrente", "Poupanca"]) + 1

        var titular = new Titular(nome, cpf)

        var conta: ContaBancaria
        if (tipoConta === 1) {
            conta = new ContaCorrente(titular, chavePix)
        } else {
            conta = new ContaPoupanca(titular, chavePix)
        }

        this.save(conta)
    }

    public removerConta() {
        console.log("--------Deletar Conta---------")
        var numeroConta = read.question("Digite o numero da conta para deletar: ")

        for (var i = 0; i < this.contas.length; i++) {
            if (numeroConta === this.contas[i].getNumero()) {
                this.contas.splice(i, 1)
                console.log(`Conta com número ${numeroConta} foi excluida com sucesso!`)
                return
            }
        }

        console.log(`Não foi encontrado nenhuma conta com o número ${numeroConta}`)
    }
}