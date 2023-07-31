const input = require('readline-sync')


let At, R, H

R = Number(input.question('Digite o raio da base: '))
H = Number(input.question('Digite a altura do cilindro: '))

At = 2*R*(R+H)

console.log('Area total do cinlindro: ', At, 'PI')

