const readline = require('readline-sync');

let idade, menores21 = 0, maiores50 = 0;

while (true) {
  idade = readline.questionInt("Digite a idade: ");

  if (idade < 0) {
    break;
  } else if (idade < 21) {
    menores21++;
  } else if (idade > 50) {
    maiores50++;
  }
}

console.log("Total de pessoas com menos de 21 anos:", menores21);
console.log("Total de pessoas com mais de 50 anos:", maiores50);