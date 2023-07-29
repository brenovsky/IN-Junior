// Estrutura de repetição FOR

var i = 0 // escopo global

for (var i = 0; i < 10; i ++) { // (iniciar a variável; limite da variável; incremento do contador)
    console.log(i)
}

let j = 0 // escopo específico

for (let j = 0; j < 10; j ++) {
    console.log(j)
}

//visualmente, não tem diferença nesse caso. mas a variável let j foi criada dentro do bloco