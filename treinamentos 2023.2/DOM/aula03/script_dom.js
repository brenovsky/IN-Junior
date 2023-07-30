let secao = document.querySelector(".secao"); // escolhendo a classe

// innerHTML - alterar conteúdo no HTML (elementos)
console.log(secao);
console.log(secao.innerHTML);

secao.innerHTML = "<a class='subtitulo'>Breno</a>"; // altera diretamente no HTML
console.log(secao);

// innerText - altera apenas o texto no HTML
let subtitulo = document.querySelector(".subtitulo");
console.log(subtitulo.innerText);

subtitulo.innerText = "YouTube";

// Atributos - mudar atributos do elemento
subtitulo.href = "youtube.com"
subtitulo.style.color = "red"