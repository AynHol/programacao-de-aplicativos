import Cachorro from "./Cachorro";
import ContaBancaria from "./ContaBancaria";
import Dono from "./Dono";

//------------------------------------------//

// var c1 = new Cachorro()
// c1.nome = "Carlos"
// c1.raca = "Vira-lata"
// c1.cor = "Caramelo"
// c1.tamanho = "Pequeno"
// c1.dono = new Dono()
// c1.dono.nome = "Luis"
// c1.dono.telefone = "(00) 0000-0000"

// c1.exibirCachorro()
// c1.exibirDono()

//------------------------------------------//

// var c2 = new Cachorro()
// c2.nome = "Tobb"
// c2.raca = "Corgi"
// c2.cor = "Preto e castanho"
// c2.tamanho = "Normal"

// var d2 = new Dono()
// d2.nome = "Paula"
// d2.telefone = "(01) 0000-0000"

// c2.dono = d2
// c2.exibirCachorro()
// c2.exibirDono()

//------------------------------------------//

// var d3 = new Dono("Luis", "(00) 0000-0000")
// var c3 = new Cachorro("Carlos", "Vira-lata", "Caramelo", "Pequeno", d3)
// c3.exibirCachorro()
// c3.exibirDono()

//------------------------------------------//

var cb1 = new ContaBancaria("(XX) XXXX-XXXX")
cb1.consultarSaldo()
cb1.depositar(100)
cb1.sacar(40)
cb1.mostrarDadosConta()