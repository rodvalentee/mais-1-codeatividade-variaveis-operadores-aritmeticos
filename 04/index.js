const input = require('readline-sync')

let C, i, t, M 

C = input.question('Digite o capital inicial: ')
i = input.question('Digite a taxa fixa de juros: ')
t = input.question('Digite o periodo de tempo: ')

M = 1000 * ( (parseFloat(1) + parseFloat(i))**parseFloat(t))

console.log('Montante: ', M.toFixed(0))