let nomes: string[] = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
let nota1: number[] = [8, 7, 9, 6, 10];
let nota2: number[] = [9, 8, 7, 7, 9];
let medias: number[] = [];

for (let i = 0; i < nomes.length; i++) {
  medias[i] = (nota1[i] + nota2[i]) / 2;
  console.log(`${nomes[i]} - Nota1: ${nota1[i]}, Nota2: ${nota2[i]}, Média: ${medias[i]}`);
}