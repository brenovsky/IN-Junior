let section = document.querySelector(".section");
let div = document.createElement("div");
section.append(div);

// add - adicionar atributos
div.classList.add("box");
div.classList.add("accept");

// remove - remover atributos
div.classList.remove("accept");

// contains - retorna um bool pra saber se contém ou não
console.log(div.classList.contains("box"));

// toggle - adiciona ou remove, dependendo do caso (se já tiver, remove. se não, adiciona)
div.classList.toggle("accept")

// replace - passa dois parâmetros. substituir classes
div.classList.replace("accept", "error")