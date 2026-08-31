document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector(".login form");

    const nomeInput = document.getElementById("nome");
    const codigoInput = document.getElementById("codigo");

    const mensagem = document.getElementById("mensagem");

    const login = document.querySelector(".login");
    const menu = document.getElementById("menu");

    const boasVindas = document.getElementById("boas-vindas");

    const botaoContinuar = document.getElementById("botaoContinuar");
    const botaoFoto = document.getElementById("botaoFoto");
    const botaoVotar = document.getElementById("botaoVotar");
    const botaoPlacar = document.getElementById("placar");

    const botaoOlho = document.getElementById("toggleSenha");
    const olhoAberto = botaoOlho.querySelector(".icone-olho-aberto");
    const olhoFechado = botaoOlho.querySelector(".icone-olho-fechado");

    const codigoCorreto = "lilas";

    function pulsar(botao) {
        botao.classList.add("pulsando");
        setTimeout(() => botao.classList.remove("pulsando"), 500);
    }

    function criarRipple(evento, botao) {
        const antigo = botao.querySelector(".ripple");
        if (antigo) antigo.remove();

        const raio = Math.max(botao.clientWidth, botao.clientHeight);
        const rect = botao.getBoundingClientRect();

        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.width = ripple.style.height = `${raio}px`;
        ripple.style.left = `${evento.clientX - rect.left - raio / 2}px`;
        ripple.style.top = `${evento.clientY - rect.top - raio / 2}px`;

        botao.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    function alternarVisibilidadeSenha() {
        const mostrando = codigoInput.type === "text";

        codigoInput.type = mostrando ? "password" : "text";

        olhoAberto.classList.toggle("oculto", !mostrando);
        olhoFechado.classList.toggle("oculto", mostrando);

        botaoOlho.setAttribute("aria-label", mostrando ? "Mostrar senha" : "Ocultar senha");

        codigoInput.focus();
    }

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        pulsar(botaoContinuar);

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

        login.classList.add("saindo");

        setTimeout(() => {
            login.style.display = "none";
            menu.classList.remove("oculto");
            menu.classList.add("entrando");
        }, 400);

    });

    botaoContinuar.addEventListener("click", (event) => {
        criarRipple(event, botaoContinuar);
    });

    botaoOlho.addEventListener("click", () => {
        alternarVisibilidadeSenha();
    });

    botaoVotar.addEventListener("click", (event) => {
        pulsar(botaoVotar);
        criarRipple(event, botaoVotar);
        alert("Área de votação em construção!");
    });

    botaoFoto.addEventListener("click", (event) => {
        pulsar(botaoFoto);
        criarRipple(event, botaoFoto);
        alert("Área de fotos em construção!");
    });

    botaoPlacar.addEventListener("click", (event) => {
        pulsar(botaoPlacar);
        criarRipple(event, botaoPlacar);
        alert("Placar em construção!");
    });

});
