let tamanho = 3; // Pode ser alterado conforme necessário
let matriz: number[][] = [];
let novaMatriz: number[][] = [];

for (let i = 0; i < tamanho; i++) {
  matriz[i] = [];
  for (let j = 0; j < tamanho; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10 + 1);
  }
}

for (let i = 0; i < tamanho; i++) {
  novaMatriz[i] = [];
  for (let j = 0; j < tamanho; j++) {
    novaMatriz[i][j] = matriz[i][j] + matriz[0][j];
  }
}

console.log("Matriz Original:", matriz);
console.log("Matriz com soma da primeira linha:", novaMatriz);