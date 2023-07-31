const input = require('readline-sync')

let C, F

F = input.question('Digite a temperatura em Fahrenheit: ')

C = 5*((F-32)/9)
console.log('Temperatura em Celsius: ', C.toFixed(1))