// Estrutura de repetição WHILE

var i = 0
var j = 0

console.log("while")
while (i < 10) { // Verifica a condição antes de executar o bloco de código (pergunta antes de atirar)
    console.log(i)
    i ++
}

console.log("do")
do { // Verifica a condição depois de executar o bloco de código (atira e depois pergunta)
    j ++
    console.log(j)
} while (j < 10)

// Pode-se usar um while com bool e usar o break

var k = 0

while (true) {
    console.log(k)
    k ++
    if (k == 10) {
        break
    }
    console.log(".")
}

// continue é como se fosse um pass do Python