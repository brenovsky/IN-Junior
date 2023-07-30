let secao = document.querySelector(".section_mensagens");

// creatElement

function enviar_mensagem() {
    let input = document.querySelector(".input_mensagens");
    // let mensagem = input.value; // input.value - o valor que receber do input
//  console.log("A mensagem é: " + mensagem)
    let escopo = document.createElement("div");
    let texto = document.createElement("p");
    texto.innerText = input.value;
    escopo.append(texto); // tira a tag p e linka
    secao.append(escopo); // linka o escopo no site (HTML)
}

function limpar_mensagem() {
    secao.innerHTML = "";
}

let btn_enviar = document.querySelector("#btn_enviar");
btn_enviar.addEventListener("click", () => {enviar_mensagem()})

let btn_limpar = document.querySelector("#btn_limpar");
btn_limpar.addEventListener("click", () => {limpar_mensagem()})

// append - linka com html