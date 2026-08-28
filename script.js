document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector(".login form");

    const nomeInput = document.getElementById("nome");
    const codigoInput = document.getElementById("codigo");

    const mensagem = document.getElementById("mensagem");

    const login = document.querySelector(".login");
    const menu = document.getElementById("menu");

    const boasVindas = document.getElementById("boas-vindas");

    const botaoVotar = document.getElementById("botaoVotar");
    const botaoFoto = document.getElementById("botaoFoto");
    const botaoPlacar = document.getElementById("placar");

    const codigoCorreto = "oi";

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        const nome = nomeInput.value.trim();
        const codigo = codigoInput.value.trim();

        if (nome === "") {
            mensagem.textContent = "Digite seu nome.";
            return;
        }

        if (codigo !== codigoCorreto) {
            mensagem.textContent = "Código de acesso incorreto.";
            codigoInput.value = "";
            codigoInput.focus();
            return;
        }

        mensagem.textContent = "Login realizado com sucesso!";

        boasVindas.textContent = `Bem-vindo, ${nome}!`;

        login.style.display = "none";

        menu.classList.remove("oculto");

    });

    botaoVotar.addEventListener("click", () => {
        alert("Área de votação em construção!");
    });

    botaoFoto.addEventListener("click", () => {
        alert("Área de fotos em construção!");
    });

    botaoPlacar.addEventListener("click", () => {
        alert("Placar em construção!");
    });

});