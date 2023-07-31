const input = require('readline-sync')

let a, b, c, delta

a = input.question('Digite o valor de a: ')
b = input.question('Digite o valor de b: ')
c = input.question('Digite o valor de c: ')


delta = (b**2)-4*a*c

console.log('Valor de delta: ', delta)