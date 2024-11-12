import "./login.css";
import "../../reset.css";
import User from "../../entity/User";

document.getElementById("cadastrar").addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("nome") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var dataNascimento = document.getElementById("data_nascimento") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation") as HTMLInputElement;

    if (password.value !== passwordConfirmation.value) {
        return;
    }

    var usuario = new User(nome.value, email.value, password.value, new Date(dataNascimento.value));
    (window as any).bankAPI.createUser(usuario)

});
