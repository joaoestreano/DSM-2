import readline from 'readline';
const leitor = readline.createInterface({ input: process.stdin, output: process.stdout });

leitor.question("Digite seu salário: ", (input) => {
  const salario = parseFloat(input);
  let reajuste = salario <= 650 ? 0.10 : 0.05;
  const novo = salario * (1 + reajuste);
  console.log("Salário antigo:", salario);
  console.log("Reajuste:", reajuste * 100 + "%");
  console.log("Novo salário:", novo.toFixed(2));
  leitor.close();
});