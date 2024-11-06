import "./reset.css";
import "./index.css";
import Vehiclee from "./entity/Vehicle";

var vehicleList: Vehiclee[] = [];

document
    .getElementById("singup-button")
    ?.addEventListener("click", async (event: MouseEvent) => {
        event.preventDefault();

        var model = document.getElementById("model") as HTMLInputElement;
        var colour = document.getElementById("colour") as HTMLInputElement;
        var ano = document.getElementById("ano") as HTMLInputElement;
        var price = document.getElementById("price") as HTMLInputElement;
        var plate = document.getElementById("plate") as HTMLInputElement;
        var image = document.getElementById("image") as HTMLInputElement;

        const newVehicle = new Vehiclee(
            model.value,
            colour.value,
            Number(ano.value),
            Number(price.value),
            plate.value,
            image.value
        );

        vehicleList.push(newVehicle);
        (window as any).bankAPI.createVehicle(newVehicle);

        const campo_list = [
            "model",
            "colour",
            "ano",
            "price",
            "plate",
            "image",
        ];
        campo_list.forEach(
            (campo) =>
                ((document.getElementById(campo) as HTMLInputElement).value =
                    "")
        );
        render();
    });

    window.onload = async () => {
        const vehicles = await (window as any).bankAPI.findAll();
        for (var i = 0; i < vehicles.length; i++) {
            const vehicle = new Vehiclee(
                vehicles[i].model,
                vehicles[i].colour,
                vehicles[i].ano,
                vehicles[i].price,
                vehicles[i].plate,
                vehicles[i].image,
                vehicles[i].id
                );
                vehicleList.push(vehicle);
            }
            render();
        };
        
        function render() {
            var aside = document.getElementById("vehicle-list");
            aside.innerHTML = "";
            
            for (var i = 0; i < vehicleList.length; i++) {
                aside.innerHTML += `
                <div class="card">
                <img src="${vehicleList[i].getImage()}" alt="ERRO">
                <div class="info">
                <strong>${vehicleList[i].getModel()}</strong>
                <span>Cor: ${vehicleList[i].getColour()}</span>
                <span>Ano: ${vehicleList[i].getAno()}</span>
                <span>Preço: R$${vehicleList[i].getPrice()}</span>
                <span>Placa: ${vehicleList[i].getPlate()}</span>
                </div>
                <div class="card-button">
                <button id="see-button" onclick="detailsPage('${vehicleList[i].getId()}')">Ver</button>
                <button id="delete-button" onclick="vehicleDelete('${vehicleList[i].getId()}')">Deletar</button>
                </div>
                </div>
                `;
            }
        }

function vehicleDelete(id: string) {
    // chama a função de deletar do preload, no contexto de 'bankAPI'
    (window as any).bankAPI.vehicleDelete(id);
    // filtra todos os itens com id diferente do id que veio por parametro
    vehicleList = vehicleList.filter(Vehiclee => Vehiclee.getId() !== id);
    render();
}

function detailsPage(id: string) {
    // chama a função de ir para a página de detalhes do preload, no contexto de 'bankAPI'
    (window as any).navigateAPI.detailsPage(id);
}

(window as any).vehicleDelete = vehicleDelete;
(window as any).detailsPage = detailsPage;