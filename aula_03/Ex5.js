const leia = require('readline-sync')

let nome = leia.question('Digite o seu nome: ');

console.log('\n*****Cardapio*****');
console.log('1 - Cachorro Quente');
console.log('2 - X-Salada');
console.log('3 - X-Bacon');
console.log('4 - Bauru');
console.log('5 - Refrigerante');
console.log('6 - Suco de laranja\n');

let pedido = leia.questionInt('Digite a seu pedido: ');
let quant = leia.questionInt('Digite a quantidade: ');

let valor;
let valorTotal;

switch(pedido){
    case 1:
        valor = 10.00;
        valorTotal = quant * valor;
        break;
    case 2:
        valor = 15.00;
        valorTotal = quant * valor;
        break;
    case 3:
        valor = 18.00;
        valorTotal = quant * valor;
        break;
    case 4:
        valor = 12.00;
        valorTotal = quant * valor;
        break;
    case 5:
        valor = 8.00;
        valorTotal = quant * valor;
        break;
    case 6:
        valor = 13.00;
        valorTotal = quant * valor;
        break;
    default:
        console.log('Pedido Inválida!')
        process.exit(0);
}

console.log(`O valor total do pedido de ${nome} é de R$ ${valorTotal.toFixed(2)}`)

