let nome = "Andressa";
let profissao = "Desenvolvedora";
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("Nome: ", nome)
console.log("Profissão: ", profissao)
console.log("Salário Liquido: ", new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL', }).format(salarioBruto + (bonus * salarioBruto)))
// console.log("Tipo da variável:", typeof nome)
console.log("O Salário Bruto do Colaborador " + nome + "é" + salarioBruto);
//Interpolação de Strings
//console.log(`O Salário Bruto do Colaborador ${nome} é ${salarioBruto}`);
