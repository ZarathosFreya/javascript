const leia = require("readline-sync");

let num1 = leia.questionInt('Digite o primeiro numero: ');
let num2 = leia.questionInt('Digite o segundo numero: ');

console.log("Multiplos de 3 e 5 no intervalo: ", num1, "e", num2);

if(num1 >= num2){
    console.log("Intervalo invalido. O primeiro numero deve ser menor que o segundo.");
    return;
}

for(let i = num1; i<= num2; i++){
    if(i % 3 === 0 && i % 5 === 0)
        console.log(i);
}