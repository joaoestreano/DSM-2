import readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite o lado X: ", (x) => {
  rl.question("Digite o lado Y: ", (y) => {
    rl.question("Digite o lado Z: ", (z) => {
      const a = parseFloat(x), b = parseFloat(y), c = parseFloat(z);
      if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
          console.log("Triângulo Equilátero");
        } else if (a === b || a === c || b === c) {
          console.log("Triângulo Isósceles");
        } else {
          console.log("Triângulo Escaleno");
        }
      } else {
        console.log("Não forma triângulo");
      }
      rl.close();
    });
  });
});