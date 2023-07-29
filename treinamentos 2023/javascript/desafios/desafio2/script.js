var n1 = prompt("Qual é o primeiro número?")
var n2 = prompt("Qual é o segundo número?")

n1 = parseFloat(n1)
n2 = parseFloat(n2)

console.log(n1 + " + " + n2 + " = " + (n1 + n2))
console.log(n1 + " - " + n2 + " = " + (n1 - n2))
console.log(n1 + " x " + n2 + " = " + (n1 * n2))
console.log(n1 + " : " + n2 + " = " + (n1 / n2))
console.log(n1 + " % " + n2 + " = " + (n1 % n2))
console.log(n1 + " ^ " + n2 + " = " + (n1 ** n2))

console.log(n1 + " é maior ou igual à " + n2 + ": " + (n1 >= n2))
console.log(n1 + " é menor ou igual à " + n2 + ": " + (n1 <= n2))
console.log(n1 + " é maior do que " + n2 + ": " + (n1 > n2))
console.log(n1 + " é menor do que " + n2 + ": " + (n1 < n2))