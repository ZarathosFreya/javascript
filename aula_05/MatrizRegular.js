const leia = require('readline-sync')
//Linhas da matriz//
let matrizInteiros = new Array (3);
//Colunas da matriz//
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}
//Percorrendo a matriz e preenchendo com dados//
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ")
        // se trocarmos a ordem [indiceLinha] e [indiceColuna], os numeros preencheram pelas colunas ao inves das linhas
    }
}
// o primeiro for é para as linhas, e o segundo para as colunas.
//Visualizando o resultado//
console.table(matrizInteiros);