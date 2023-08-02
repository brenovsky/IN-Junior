import {getLobinhoById} from "./API-falsa.js"

const urlParams = new URLSearchParams(window.location.search);
const lobinho_id = urlParams.get("id");

getLobinhoById(lobinho_id)
.then((lobo) => {
    var nome = document.getElementById("nome-do-lobo");
    nome.textContent = `Adote o(a) ${lobo.nome}`;

    var nome = document.getElementById("id-do-lobo");
    nome.textContent = `ID-${lobo.id}`;

    var img = document.getElementById("img_wolf");
    img.src = lobo.imagem;
})
