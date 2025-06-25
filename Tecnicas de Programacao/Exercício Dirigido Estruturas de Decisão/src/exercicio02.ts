let peso: number = 82;
let altura: number = 1.63;
let imc: number = peso / Math.pow(altura, 2);

console.log("Seu IMC é:", imc.toFixed(2));

if (imc <= 18.5) {
  console.log("Abaixo do peso ideal");
} else if (imc <= 24.9) {
  console.log("Dentro do peso ideal");
} else if (imc <= 29.9) {
  console.log("Acima do peso ideal");
} else if (imc <= 34.9) {
  console.log("Obesidade Grau I");
} else if (imc <= 39.9) {
  console.log("Obesidade Grau II");
} else {
  console.log("Obesidade Grau III");
}