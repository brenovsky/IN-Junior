// Operadores lógicos e input

var idade1 = 10
var idade2 = 20
var idade3 = 10
var idade4 = 5

// && ("e")
// || ("ou")
// ! ("not")

console.log((idade1 == idade3) && (idade3 == idade1))
console.log((idade1 == idade3) || (idade1 < idade4))

// o resultado boleano vai ser resultante da tabela verdade

console.log(!(idade1 == idade3))

// input

var nome = prompt("qual é o seu nome?")
console.log("Olá, " + nome + "!")

var idade = prompt("Olá, " + nome + " qual é a sua idade?")
console.log("Sua idade é " + idade)
//o valor recebido será uma string

//parseInt() - converte para int
//parseFloat() - converte para float