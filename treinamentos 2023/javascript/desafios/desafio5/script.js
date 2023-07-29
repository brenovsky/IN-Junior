while (true) {
    var n1 = prompt("Digite o primeiro número (digite sair para encerrar)")

    if (n1 == "sair") {
        break
    }

    var n2 = prompt("Digite o segundo número (digite sair para encerrar)")

    if (n2 == "sair") {
        break
    }

    var op = prompt("Escolha a operação:\n1 - Adição \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - Potenciação")

    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    op = parseFloat(op)

    if (op == 1) {
        alert(n1 + ' + ' + n2 + ' = ' + (n1 + n2) )
    }

    else {
        if (op == 2) {
            alert(n1 + ' - ' + n2 + ' = ' + (n1 - n2))
        }
        if (op == 3) {
            alert(n1 + ' x ' + n2 + ' = ' + (n1 * n2) )
        }
        if (op == 4) {
            alert(n1 + ' : ' + n2 + ' = ' + (n1 / n2) )
        }
        if (op == 5) {
            alert(n1 + ' ^ ' + n2 + ' = ' + (n1 ** n2) )
        }
    }
}