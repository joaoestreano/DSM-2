let vetor: number[] = [];
let maior = -Infinity, menor = Infinity;
let posMaior = -1, posMenor = -1;

for (let i = 0; i < 30; i++) {
  vetor[i] = Math.floor(Math.random() * 100 + 1);
  if (vetor[i] > maior) {
    maior = vetor[i];
    posMaior = i;
  }
  if (vetor[i] < menor) {
    menor = vetor[i];
    posMenor = i;
  }
}

console.log("Vetor:", vetor);
console.log(`Maior: ${maior} na posição ${posMaior}`);
console.log(`Menor: ${menor} na posição ${posMenor}`);