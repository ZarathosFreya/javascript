const leia = require('readline-sync')
//Linhas da matriz//
let matrizInteiros = new Array (2);
//Colunas da matriz//
//Obs: são 2 linhas apenas nesse exemplo//
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}
//Percorrendo a matriz e preenchendo com dados//
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ")
        // se trocarmos a ordem [indiceLinha] e [indiceColuna], os numeros preencheram pelas colunas ao inves das linhas
        // o ajuste na linha 10 foi adicionar [indiceLinha] na condição for 
    }
}
// o primeiro for é para as linhas, e o segundo para as colunas.
//Visualizando o resultado//
console.table(matrizInteiros);