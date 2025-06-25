let vetor: number[] = [];

for (let i = 0; i < 20; i++) {
  vetor[i] = Math.floor(Math.random() * 100 + 1);
}

vetor.sort((a, b) => a - b);

console.log("Vetor ordenado:", vetor);