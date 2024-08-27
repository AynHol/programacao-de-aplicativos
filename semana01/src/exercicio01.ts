import read from 'readline-sync'

var nomes: string[] = []
var idades: number[] = []
var nomeNova: string
var idadeNova: number
var nomeVelha: string
var idadeVelha: number

function pedirInfoUsuario(qtd: number) {
    for (var i = 0; i < qtd; i++) {
        var nome = read.question("Digite o nome: ")
        nomes.push(nome)
        var idade = read.questionInt("Digite a idade: ")
        idades.push(idade)
    }
}

function pessoaMaisNova() {
    for (var i = 0; i < idades.length; i++) {
        if (!idadeNova || idades[i] < idadeNova) {
            idadeNova = idades[i]
            nomeNova = nomes[i]
        }
    }
    console.log(`A pessoa mais nova é ${nomeNova} com ${idadeNova} anos.`)
}

function pessoaMaisVelha() {
    idades.forEach((idade, index) => {
        if (!idadeVelha || idade > idadeVelha) {
            idadeVelha = idade
            nomeVelha = nomes[index]
        }
    })
    console.log(`A pessoa mais velha é ${nomeVelha} com ${idadeVelha} anos.`)
}

pedirInfoUsuario(5)
pessoaMaisNova()
pessoaMaisVelha()