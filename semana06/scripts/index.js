function pegarInformacoes(event) {
    event.preventDefault()
    var nome = document.getElementById("name")
    var email = document.getElementById("email")
    var message = document.getElementById("message")
    validarCampo(nome)
    validarCampo(email)
    validarCampo(message)
    var comentario = `
    <div class="comentario-item">
        <span>${nome.value} - <strong>${email.value}</strong></span>
        <p>${message.value}</p>
    </div>
    `
    document.getElementById("comentarios").innerHTML += comentario
    nome.value = ""
    email.value = ""
    message.value = ""
    document.getElementById("botao").disabled = true
}

function validarCampo(elemento) {
    if (elemento.value === "") {
        elemento.style.borderColor = "red"
    } else {
        elemento.style.borderColor = "black"
    }
}

function capturarTecla(event) {
    if (event.key === 'Enter') {
        pegarInformacoes(event)
    }
}

function verificarDisabled() {
    var nome = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    if (nome !== "" && email !== "" && message !== "") {
        document.getElementById("botao").disabled = false
    } else {
        document.getElementById("botao").disabled = true
    }
}