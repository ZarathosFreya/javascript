const leia = require('readline-sync')

let num = leia.questionInt('Digite um numero: ');
let contador = 1;
while(contador < 10){
    console.log(`${num} X ${contador} = ${num * contador}`);
    contador++;
}