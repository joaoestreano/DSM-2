let numeros: number[] = [];
let maior = 0;

for (let i = 0; i < 20; i++) {
  numeros[i] = Math.floor(Math.random() * 100 + 1);
  if (numeros[i] > maior) maior = numeros[i];
}

console.log("Vetor:", numeros);
console.log("Maior número:", maior);