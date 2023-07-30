// getElementById - pesquisa uma tag que tem o id e devolve o >>primeiro<< que ele encontrar
let secao1 = document.getElementById("paragrafo");
console.log(secao1);

// getElementByClassName - pesquisa e adiciona tudo relacionado à classe numa coleção

let paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos);

// querySelector - busca tanto pelo id quanto pela classe do elemento, retorna o primeiro que ele encontrar

let paragrafo = document.querySelector("#paragrafo"); // para id, se usa #
console.log(paragrafo);

let secao = document.querySelector(".paragrafo");
console.log(secao);

// querySelectorAll - busca por todos e retorna como um objeto

let paragrafos2 = document.querySelectorAll(".paragrafo");
console.log(paragrafos2)