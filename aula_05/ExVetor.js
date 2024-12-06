const readline = require("readline-sync")

function buscarNumero(vetor, numeroBuscado) {
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === numeroBuscado) {
        return i;
      }
    }
    return -1;
  }
  const numeros = [5, 2, 8, 1, 9, 3, 7, 6, 4, 10];
  const numeroProcurado = readline.questionInt("Digite o número que deseja encontrar:");
  
  const posicao = buscarNumero(numeros, numeroProcurado);
  
  if (posicao !== -1) {
    console.log("O número foi encontrado na posição:", posicao);
  } else {
    console.log("Número não encontrado!");
  }