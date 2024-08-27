import read from 'readline-sync'
import { Categoria, Produto } from './Produto'

var nomeCategoria = read.question("Digite o nome da categoria: ")
var descCategoria = read.question("Digite a descricao da categoria: ")
const categoria: Categoria = {
    nome: nomeCategoria,
    descricao: descCategoria
}

console.log("--------Categoria Cadastrada---------")

var nomeProduto = read.question("Digite o nome do produto: ")
var preco = read.questionFloat("Digite o preco do produto: ")
var codigo = read.question("Digite o codigo do produto: ")
var marca = read.question("Digite a marca do produto: ")

const produto: Produto = {
    nome: nomeProduto,
    preco: preco,
    codigo: codigo,
    marca: marca,
    categoria: categoria
}

console.log(produto)