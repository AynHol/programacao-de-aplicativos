import { Client } from "pg";
import Vehiclee from "src/entity/Vehicle";

export default class VehicleRepository {
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

    async save(vehicle: Vehiclee) {
        try {
            this.connection.connect();
            const sql =
                "insert into vehicles (id, model, colour, ano, price, plate, image) values ($1, $2, $3, $4, $5, $6, $7)";
            const values = [
                vehicle.getId(),
                vehicle.getModel(),
                vehicle.getColour(),
                vehicle.getAno(),
                vehicle.getPrice(),
                vehicle.getPlate(),
                vehicle.getImage(),
            ];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error);
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findAll() {
        try {
            this.connection.connect();
            const sql = "select * from vehicles where status = $1";
            const result = await this.connection.query(sql, [true]);
            return result.rows;
        } catch (error) {
            console.log(error);
            return [];
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findById(id: string) {
        try {
            this.connection.connect();
            const sql = "select * from vehicles where id = $1";
            const result = await this.connection.query(sql, [id]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return [];
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async delete(id: string) {
        try {
            this.connection.connect();
            const sql = "update vehicles set status = $1 where id = $2";
            await this.connection.query(sql, [false, id]);
        } catch (error) {
            console.log(error);
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }
}
