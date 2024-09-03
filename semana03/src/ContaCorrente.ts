import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";

export default class ContaCorrente extends ContaBancaria {
    private limite: number

    constructor(chavePix: string) {
        super(chavePix)
        this.limite = 1000
    }

    public getLimite(): number {
        return this.limite
    }

    public override sacar(valor: number): void {
        var valorDisponivel = this.getSaldo
    }
}