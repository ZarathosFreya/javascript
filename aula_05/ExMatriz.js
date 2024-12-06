function processarMatriz(matriz) {
    const diagonalPrincipal = [];
    const diagonalSecundaria = [];
    let somaPrincipal = 0;
    let somaSecundaria = 0;

    for (let i = 0; i < matriz.length; i++) {
        diagonalPrincipal.push(matriz[i][i]);
        diagonalSecundaria.push(matriz[i][matriz.length - 1 - i]);
        somaPrincipal += matriz[i][i];
        somaSecundaria += matriz[i][matriz.length - 1 - i];
    }

    console.log("Diagonal Principal:", diagonalPrincipal);
    console.log("Diagonal Secundária:", diagonalSecundaria);
    console.log("Soma da Diagonal Principal:", somaPrincipal);
    console.log("Soma da Diagonal Secundária:", somaSecundaria);
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

processarMatriz(matriz);