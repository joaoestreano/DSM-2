let num: number[] = Array(5);

for (let i = 0; i < 5; i++) {
  num[i] = Math.floor(Math.random() * 100 + 1);
}

for (let i = 0; i < 5; i++) {
  console.log(`Posição ${i} – Valor: ${num[i]}`);
}