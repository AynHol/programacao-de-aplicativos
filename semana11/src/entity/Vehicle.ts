import { v4 as uuid } from "uuid";

export default class Vehiclee {
    private id: string;
    private model: string;
    private colour: string;
    private ano: number;
    private price: number;
    private plate: string;
    private image: string;

    constructor(model: string, colour: string, ano: number, price: number, plate: string, image: string, id?: string) {
        this.id = id === undefined ? uuid() : id;
        this.model = model;
        this.colour = colour;
        this.ano = ano;
        this.price = price;
        this.plate = plate;
        this.image = image;
    }

    public getId() {
        return this.id;
    }
    public getModel() {
        return this.model;
    }
    public getColour() {
        return this.colour;
    }
    public getAno() {
        return this.ano;
    }
    public getPrice() {
        return this.price;
    }
    public getPlate() {
        return this.plate;
    }
    public getImage() {
        return this.image;
    }
}
