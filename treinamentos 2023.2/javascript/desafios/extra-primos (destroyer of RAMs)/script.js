var n = prompt("Insira um número para verificar se é primo ou não")

n = parseInt(n)

var primo = true

if (n == 1) {
    primo = false
}

else {
    if (n == 2) {
        primo = true
    }
    if (n >= 3) {
        for (var i = 2; i < n ** (1 / 2) + 1; i ++) {
            if (n % i == 0) {
                primo = false
                break
            }
        }
    }
    else {
        alert("Erro")
    }
}

alert(n + ": " + primo)