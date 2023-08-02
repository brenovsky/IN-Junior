import {getLobinhoById} from "./API-falsa.js"

const urlParams = new URLSearchParams(window.location.search);
const lobinho_id = urlParams.get("id");

getLobinhoById(lobinho_id)
.then((lobo) => {
    console.log(lobo);

    var nome = document.getElementById("wolf_name");
    nome.textContent = lobo.nome;

    var descricao = document.getElementById("texto");
    descricao.textContent = lobo.descricao;

    var img = document.getElementById("img1");
    //img.classList.add("img");
    img.src = lobo.imagem;
    // precisa ajeitar o size da imagem, mas o código já funciona

    var botao_adotar = document.getElementById("btn_adotar")
    botao_adotar.addEventListener("click", () => {
        location.href = `adotelobinhos.html?id=${lobo.id}`;
    })
})
