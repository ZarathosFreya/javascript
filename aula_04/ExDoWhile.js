const readline = require('readline-sync');

let numero, soma = 0;

console.log("Digite números inteiros. Para parar, digite 0.");

do {
  numero = readline.questionInt("Digite um número: ");
  if (numero > 0) {
    soma += numero;
  }
} while (numero !== 0);

console.log("A soma dos números positivos é:", soma);