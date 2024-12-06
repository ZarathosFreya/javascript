const leia = require("readline-sync")

let vetorStrings = ["Boxer", "Pastor Alemao", "Pinscher", "Husk Siberiano", "Corgi"];

let vetorInteiros = new Array(5);

let vetorNumeros = [7 ,5, 9, 1, 3, 2, 6, 4, 8, 10];

for(let contador = 0; contador < vetorStrings.length; contador++){
    console.log(vetorStrings[contador]);
}

console.log("O tamanho do vetor de Strings é: ", vetorStrings.length);

//for(let contador = 0; contador < vetorInteiros.length; contador++){
//    vetorStrings[contador] = leia.questionInt('Digite um numero: ');
//}

console.table(vetorInteiros);

console.table(vetorStrings.sort())

console.table(vetorNumeros.sort((a,b) => a - b))

console.log("Existe o numero 2? ", vetorNumeros.indexOf(2))
//localiza um determinado numero, exemplo 2
