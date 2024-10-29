import "./reset.css";
import "./index.css";
import Vehicle from "./entity/Vehicle";

var vehicleList: Vehicle[] = [];

document.getElementById("singup-button")?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    var model = document.getElementById("model") as HTMLInputElement;
    var colour = document.getElementById("colour") as HTMLInputElement;
    var year = document.getElementById("year") as HTMLInputElement;
    var price = document.getElementById("price") as HTMLInputElement;
    var plate = document.getElementById("plate") as HTMLInputElement;
    var image = document.getElementById("image") as HTMLInputElement;

    const newVehicle = new Vehicle(model.value, colour.value, Number(year.value), Number(price.value), plate.value, image.value);

    vehicleList.push(newVehicle);
    (window as any).bankAPI.createVehicle(newVehicle);
    
    const campo_list = ["model", "colour", "year", "price", "plate", "image"];
    campo_list.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "");

    var aside = document.getElementById("vehicle-list");
    aside.innerHTML = "";

    for(var i = 0; i < vehicleList.length; i++){
        aside.innerHTML += `
            <div class="card">
                <img src="${vehicleList[i].getImage()}" alt="ERRO">
                <div class="info">
                    <strong>${vehicleList[i].getModel()}</strong>
                    <span>Cor: ${vehicleList[i].getColour()}</span>
                    <span>Ano: ${vehicleList[i].getYear()}</span>
                    <span>Preço: R$${vehicleList[i].getPrice()}</span>
                    <span>Placa: ${vehicleList[i].getPlate()}</span>
                </div>
                <div class="card-button">
                    <button id="see-button">Ver</button>
                    <button id="delete-button">Deletar</button>
                </div>
            </div>
        `;
    };
});
