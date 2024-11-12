import {v4 as uuid} from "uuid";

export default class User {
    private id: string;
    private nome: string;
    private email: string;
    private password: string;
    private data_nascimento: Date;
    private criado_em: Date;
    private atualizado_em: Date;

    constructor(nome: string, email: string, password: string, data_nascimento: Date) {
        this.id = uuid();
        this.nome = nome;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.criado_em = new Date();
        this.atualizado_em = new Date();
        this.password = password;
    }

    public getId() {
        return this.id;
    }
    public getNome() {
        return this.nome;
    }
    public getEmail() {
        return this.email;
    }
    public getPassword() {
        return this.password;
    }
    public getDataNascimento() {
        return this.data_nascimento;
    }
    public getDataCriacao() {
        return this.criado_em;
    }
    public getAtualizadoEm() {
        return this.atualizado_em;
    }
}
