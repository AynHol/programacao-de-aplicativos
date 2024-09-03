import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente";

var cb1 = new ContaBancaria("(XX) XXXX-XXXX")

cb1.getNumero()
cb1.setNumero("213123321")

cb1.consultarSaldo()
cb1.depositar(100)
cb1.sacar(40)
cb1.mostrarDadosConta()

console.log(" ")
console.log("---------------------")
console.log(" ")

var cc = new ContaCorrente("(XX) XXXX-XXXX")
console.log(`Limite Conta Corrente: ${cc.getLimite()}`)