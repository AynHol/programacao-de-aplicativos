import "./reset.css";
import "./details.css";

document.getElementById("goback-button").addEventListener("click", () => {
    (window as any).navigateAPI.homePage();
});

window.onload = async () => {
    const id = new URLSearchParams(window.location.search).get("id");
    const vehicle = await (window as any).bankAPI.findById(id);
    console.log(vehicle);

    var aside = document.getElementById("vehicle");
    aside.innerHTML = "";

    aside.innerHTML += `
        <div class="card">
            <img src="${vehicle.image}" alt="ERRO">
            <div class="info">
                <strong>${vehicle.model}</strong>
                <span>Cor: ${vehicle.colour}</span>
                <span>Ano: ${vehicle.ano}</span>
                <span>Preço: R$${vehicle.price}</span>
                <span>Placa: ${vehicle.plate}</span>
            </div>
        </div>
        `;
};
