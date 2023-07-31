const input=require('readline-sync')


let d, t, v

d = input.question('Digite a distância percorrida: ')
t = input.question('Digite a o tempo: ')

v = d/t

v = v * 3.6

console.log('Velocidade = ', v.toFixed(1), 'km/h')