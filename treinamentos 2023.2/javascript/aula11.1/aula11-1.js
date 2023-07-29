// Funções

// Funções básicas exemplos
prompt()
console.log()

// Invocando funções
nomaDaFuncao();
nomeDaFuncaoComParametros('nome', 5, True) // exemplo

// Criando a função
function sayHello() {
    let you = prompt("Qual é o seu nome?");
    console.log("Olá, " + you + "!")
}

// Variável como uma função (função anônima)
let varContainingFunction = function() {
    let varInFunction = "Eu sou uma função.";
    console.log("Olá! " + varInFunction);
}

varContainingFunction(); // chamando a função

// 1 - como nomear funções - usar o camelCase
// 2 - dar um nome semântico pra função
// 3 - utilizar um verbo para dar nome a função

// Parâmetros e argumentos
function addTwoNumbers(x, y) {
    console.log(x + y);
}
addTwoNumbers(4, 8);

// Parâmetros padrões
//servem pra se os parâmetros não forem passados, vai utilizar um parâmetro pré-definido pela máquina

function addTwoNumbers2(x = 1, y = 7) {
    console.log(x + y);
}

addTwoNumbers2(); // vai printar 1 + 7