function enviar_mensagem() {
    let secao = document.querySelector(".secao_mensagem");
    let input = document.querySelector(".input_mensagem");
    let escopo = document.createElement("div");
    let mensagem = document.createElement("p");
    mensagem.innerText = input.value;
    let btn_excluir = document.createElement("button");
    let btn_editar = document.createElement("button");
    btn_editar.innerText = "Editar";
    btn_excluir.innerText = "Excluir";
    btn_editar.setAttribute("onclick", "editar_conteudo(this)");
    btn_excluir.setAttribute("onclick", "excluir_conteudo(this)");
    escopo.classList.add("escopo");
    escopo.append(mensagem);
    escopo.append(btn_editar, btn_excluir);
    secao.append(escopo);
}

function excluir_conteudo(btn_html) {
    btn_html.parentElement.remove();
}

function editar_conteudo() {
    console.log("Editar");
}

let enviar = document.querySelector("#enviar");
enviar.addEventListener("click", () => {enviar_mensagem()});