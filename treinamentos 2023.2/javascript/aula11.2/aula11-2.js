// Funções especiais e operadores

// Arrow functions

// Forma 1
// (param1, param2) => corpo da função;

// Forma 2
// () => corpo da função;

// Forma 3
// param => corpo da função;

// Forma 4
// (param1, param2) => {
        //numero qualquer de linhas
// }

// Função
// function doStuff(x) {
//     console.log(x);
// }

// em arrow
let doStuff = x => console.log(x);
doStuff("Excelente!");

// Return (parecido com python)
function addTwoNumbers(x, y) {
    return(x + y)
}

let sum = addTwoNumbers(4, 10);
console.log(sum)

// Return com arrow (se for uma linha, não precisa de return)

let addTwoNumbers2 = (x, y) => x + y;
let s = addTwoNumbers2(3, 5);
console.log(s)