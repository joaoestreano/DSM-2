let totalEleitores: number = 1000;
let votosBrancos: number = 100;
let votosNulos: number = 150;
let votosValidos: number = 750;

console.log("Brancos: " + ((votosBrancos / totalEleitores) * 100).toFixed(2) + "%");
console.log("Nulos: " + ((votosNulos / totalEleitores) * 100).toFixed(2) + "%");
console.log("Válidos: " + ((votosValidos / totalEleitores) * 100).toFixed(2) + "%");