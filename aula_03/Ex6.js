const leia = require('readline-sync')

let nome = leia.question('Digite o seu nome: ');

console.log('\n*****Qual o seu cargo?*****');
console.log('1 - Gerente');
console.log('2 - Vendedor');
console.log('3 - Supervisor');
console.log('4 - Motorista');
console.log('5 - Estoquista');
console.log('6 - Tecnico de TI\n');

let cargo = leia.questionInt('Digite seu cargo: ');
let salario = leia.questionInt('Digite seu salario: ');
let novoSalario;
let reajuste; 

switch(cargo){
    case 1:
        reajuste = 0.10;
        novoSalario = salario + (reajuste * salario)
        break;
    case 2:
        reajuste = 0.07;
        novoSalario = salario + (reajuste * salario)
        break;
    case 3:
        reajuste = 0.09;
        novoSalario = salario + (reajuste * salario)
        break;
    case 4:
        reajuste = 0.06;
        novoSalario = salario + (reajuste * salario)
        break;
    case 5:
        reajuste = 0.05;
        novoSalario = salario + (reajuste * salario)
        break;
    case 6:
        reajuste = 0.08;
        novoSalario = salario + (reajuste * salario)
        break;
    default:
        console.log('Escolha Inválida!')
        process.exit(0);
}

console.log(`O novo salario de ${nome} é de R$ ${novoSalario.toFixed(2)}`)