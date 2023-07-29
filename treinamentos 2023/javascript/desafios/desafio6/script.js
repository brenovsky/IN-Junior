var nomes = []
var idades = []

while (true) {
    let nome = prompt("Qual é o nome?")
    nomes.push(nome)

    let idade = prompt("Qual é a idade?")
    idades.push(idade)

    let stop = prompt("Continuar? S/N")

    if (stop == "N" || stop == "n") {
        break
    }
}

for (let i = 0; i < nomes.length; i ++) {
    console.log(nomes[i] + " tem " + idades[i] + " anos.")
}

console.log("Foram feitos " + nomes.length + " cadastros.")