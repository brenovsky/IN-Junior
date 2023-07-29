var n = prompt("Digite n")

n = parseInt(n)

var soma = 0

for (let i = 1; i <= n; i ++) {
    console.log("2 ^ " + i + " = " + (2 ** i))
    soma = soma + (2 ** i)
}

alert("Soma = " + soma)