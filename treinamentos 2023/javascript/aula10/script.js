// Arrays pt.2

var lista = ["A", "B", "C"]

for (elemento of lista) { // of - imprime individualmente elementos da lista em loop
    console.log(elemento)
}

for (indice in lista) { // in - imprime individualmente propriedades da lista em loop
    console.log(indice)
}

// array dentro de array

var matriz = [[0, 3], [1, -7]]

console.log(matriz[0][1]) // igual python