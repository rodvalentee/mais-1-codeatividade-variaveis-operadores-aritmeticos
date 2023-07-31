const input = require('readline-sync')

let raio, diametro, volume

diametro = input.question('Digite o valor do diametro: ')
raio = diametro/2


volume = (4/3) * (raio**3)

console.log('Volume: ', volume, 'PI')