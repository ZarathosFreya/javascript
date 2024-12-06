const leia = require('readline-sync')

let num = leia.questionInt('Digite um numero: ');
let contador = 1;
do {
    console.log(`${num} X ${contador} = ${num * contador}`);
    contador++;
}while(contador <= 10)