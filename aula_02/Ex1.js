const readline = require('readline-sync');

function calcularNovoSalario(){
    let salario = parseFloat(readline.question("Digite seu salario: "));
    let abono = parseFloat(readline.question("Digite o valor do abono: "));
    let novoSalario = salario + abono;

    console.log(`Seu novo salário é ${novoSalario.toFixed(2)}`);
}
calcularNovoSalario();