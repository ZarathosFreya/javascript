const leia = require('readline-sync')

let nome = leia.question('Digite o seu nome: ');
let idade = leia.questionInt('Digite a idade: ');
let doacao = leia.question('Primeira doação de sangue: ');

if(idade >= 18 && idade <= 69){
    if(idade >= 60 && idade <= 69){
        leia = doacao
        if(doacao = n){
            console.log(`${nome} está apto(a) para doar sangue`)
        }else{
            console.log(`${nome} não está apto(a) para doar sangue`)
        }
    }
}else{
    console.log(`${nome} está apto(a) para doar sangue`)
}