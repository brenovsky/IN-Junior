// Arrays

var lista = [1, 2, 3, 4, 5, 6]
var nomes = ['estojo', 'pao de queijo', 'lapis']

// índices (mesmo esquema de python)

console.log(nomes[2])

// lista.pop() - remove o último elemento da lista
// lista.shift() - remove o primeiro elemento da lista e realoca os índices dos elementos restantes
// lista.push() - adiciona um elemento na lista na última posição (é o .append() do python)
// lista.unshift() - adiciona um elemento na lista na primeira posição e realoca os índices dos elementos

// lista.length() - tamanho da lista

var tamanho = nomes.length

console.log(tamanho)

// lista1.concat(lista2) - concatena as listas

// lista.splice(indice, elementos que quer deletar depois do índice, elemento) - adiciona elementos em um índice específico / pode-se usar isso para remover elementos de um índice específico também, só não colocar o terceiro parâmetro

// lista.slice(começo, término) - extrai elementos de uma lista para uma nova lista

// lista.sort() - ordem crescente ou alfabética
// lista.reverse() - ordem decrescente