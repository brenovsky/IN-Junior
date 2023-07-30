// Seletores secundários

let paragrafo = document.querySelector(".text");

let section = document.querySelector(".section");

// elemento.parentElement - busca e retorna o pai do elemento (se não tiver, é null)

console.log(paragrafo.parentElement); // retorna o pai

// elemento.parentNode - também retorna o pai (se não tiver pai, retorna o #document)

console.log(paragrafo.parentNode);

// elemento.firstElementChild - devolve o primeiro elemento filho de um elemento (dentro da primeira tag)

console.log(section.firstElementChild);

// elemento.firstChild - retorna o primeiro filho (não importa se é texto ou conteúdo dentro da tag)

console.log(section.firstChild);

// elemento.lastElementChild - retorna o último elemento filho

console.log(section.lastElementChild);

// elemento.children - retorna um html collection com todos os filhos do elemento escolhido

console.log(section.children);