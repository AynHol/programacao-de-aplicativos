import { Client } from "pg";
import User from "src/entity/User";

export default class UserRepository {
    private connection: Client;

    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: "revenda",
                user: "postgres",
                password: "senai",
            });
        }
    }

    async save(user: User) {
        try {
            this.connection.connect();
            const sql =
                "insert into usuario (id, nome, email, password_hash, data_nascimento, criado_em, atualizado_em) values ($1, $2, $3, $4, $5, $6, $7)";
            const values = [
                user.getId(),
                user.getNome(),
                user.getEmail(),
                user.getPassword(),
                user.getDataNascimento(),
                user.getDataCriacao(),
                user.getAtualizadoEm(),
            ];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error);
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findByEmail(email: string) {
        try {
            this.connection.connect();
            const sql = "select * from usuario where email = $1";
            const result = await this.connection.query(sql, [email]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return [];
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async deleteUser(id: string) {
        try {
            this.connection.connect();
            const sql = "update usuario set status = $1 where id = $2";
            await this.connection.query(sql, [false, id]);
        } catch (error) {
            console.log(error);
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }
}
