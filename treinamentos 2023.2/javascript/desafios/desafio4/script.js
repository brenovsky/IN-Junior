var n = prompt("Escolha um número inteiro para calcular sua tabuada!")

n = parseInt(n)

for (var i = 1; i <= 10; i ++) {
    console.log(n + " x " + i + " = " + (n * i))
}