
const input = require('readline-sync')

let C, A

R = input.question('Digite o raio:')


C = 2*3.14*R
A = 3.14*(R**2)

console.log('Comprimento: ', C)
console.log('Area: ', A)