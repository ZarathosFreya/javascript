const leia = require('readline-sync')

let n1, n2;

n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segundo numero: ")

console.log("A Variável N1 possui o valor: ", n1)
console.log("A Variável N2 possui o valor: ", n2)

//lembre-se de adicionar a variável soma
//soma = n1 + n2;
//console.log("A Soma de N1 + N2 é igual a:", soma) ou

console.log("A Soma de N1 + N2 é igual a:", n1 + n2)
console.log("A Subtração de N1 - N2 é igual a:", n1 - n2)
console.log("A Multiplicação de N1 * N2 é igual a:", n1 * n2)
console.log("A Divisão de N1 / N2 é igual a:", n1 / n2)
console.log("A Potenciação de N1 ^ N2 é igual a:", Math.pow (n1 , n2))
console.log("A Raiz Quadrada de N1 é igual a:", Math.sqrt (n1))
