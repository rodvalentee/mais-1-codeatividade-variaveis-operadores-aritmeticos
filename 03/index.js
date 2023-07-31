const input = require('readline-sync')


let valor_desconto, valor_produto, valor

valor = input.question('Digite o valor que tem em maos: ')
valor_produto = input.question('Digite o valor do produto: ')

valor_desconto = 100-((valor*100)/valor_produto)

console.log('Porcentagem de desconto: ', valor_desconto.toFixed(1), '%')