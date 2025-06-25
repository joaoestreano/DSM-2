import readline from 'readline';
const leitor = readline.createInterface({ input: process.stdin, output: process.stdout });

leitor.question("Digite sua idade: ", (input) => {
  const idade = parseInt(input);
  if (idade <= 10) console.log("Criança");
  else if (idade <= 13) console.log("Pré-Adolescente");
  else if (idade <= 17) console.log("Adolescente");
  else if (idade <= 59) console.log("Adulto");
  else console.log("Idoso");
  leitor.close();
});