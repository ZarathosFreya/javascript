const leia = require('readline-sync')

const a = leia.questionInt('Digite numero A: ');
const b = leia.questionInt('Digite numero B: ');
const c = leia.questionInt('Digite numero C: ');
const soma = a + b;

if(soma > c){
    console.log("A Soma de A + B é Maior do que C")
}else if(soma < c){
    console.log("A Soma de A + B é Menor do que C")
}else{
    console.log("A Soma de A + B é Igual a C")
}

