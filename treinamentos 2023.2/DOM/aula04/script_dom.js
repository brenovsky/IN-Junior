// evento: espera alguma condição ser atingida para realizar algo

let button = document.querySelector(".button")

// addEventListener("evento", () => função)
button.addEventListener("click", () => {
    console.log("Clicou")
})

let text = document.querySelector(".text")

text.addEventListener("mouseenter", () => {
    text.innerText = 'Entrou'
}) // colocar o mouse em cima

text.addEventListener("mouseleave", () => {
    text.innerText = 'Saiu'
}) // quando tirar o mouse de cima