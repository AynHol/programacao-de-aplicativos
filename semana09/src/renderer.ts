import "./reset.css";
import "./index.css";

var vehicleList: any = [];

document.getElementById("singup-button")?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    var model = document.getElementById("model") as HTMLInputElement;
    var colour = document.getElementById("colour") as HTMLInputElement;
    var year = document.getElementById("year") as HTMLInputElement;
    var price = document.getElementById("price") as HTMLInputElement;
    var plate = document.getElementById("plate") as HTMLInputElement;
    var image = document.getElementById("image") as HTMLInputElement;

    const newCar = {
        model: model.value,
        colour: colour.value,
        year: year.value,
        price: price.value,
        plate: plate.value,
        image: image.value,
    };

    vehicleList.push(newCar);

    const campo_list = ["model", "colour", "year", "price", "plate", "image"];
    campo_list.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "");

    var aside = document.getElementById("vehicle-list");
    aside.innerHTML = "";

    for(var i = 0; i < vehicleList.length; i++){
        aside.innerHTML += `
            <div class="card">
                <img src="${vehicleList[i].image}" alt="ERRO">
                <div class="info">
                    <strong>${vehicleList[i].model}</strong>
                    <span>Cor: ${vehicleList[i].colour}</span>
                    <span>Ano: ${vehicleList[i].year}</span>
                    <span>Preço: R$${vehicleList[i].price}</span>
                    <span>Placa: ${vehicleList[i].plate}</span>
                </div>
                <div class="card-button">
                    <button id="see-button">Ver</button>
                    <button id="delete-button">Deletar</button>
                </div>
            </div>
        `;
    };
});
