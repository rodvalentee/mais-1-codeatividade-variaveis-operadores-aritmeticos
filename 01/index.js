const input = require('readline-sync')

let P, A, I

A = input.question('Digite sua altura:')
P = input.question('Digite seu peso:')

I = P/(A**2)

console.log("IMC = ", I.toFixed(1))



