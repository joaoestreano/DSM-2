import readline from 'readline';
const leitor = readline.createInterface({ input: process.stdin, output: process.stdout });

leitor.question("Nome do funcionário: ", (nome) => {
  leitor.question("Categoria: ", (cat) => {
    leitor.question("Salário: ", (sal) => {
      const categoria = cat.toUpperCase();
      const salario = parseFloat(sal);
      let aumento = 0;

      switch (categoria) {
        case "A": case "C": case "F": case "H": aumento = 0.10; break;
        case "B": case "D": case "E": case "I": case "J": case "T": aumento = 0.15; break;
        case "K": case "R": aumento = 0.25; break;
        case "L": case "M": case "N": case "O": case "P": case "Q": case "S": aumento = 0.35; break;
        case "U": case "V": case "X": case "Y": case "W": case "Z": aumento = 0.50; break;
        default: console.log("Categoria inválida"); leitor.close(); return;
      }

      const novoSalario = salario * (1 + aumento);
      console.log(`Nome: ${nome}`);
      console.log(`Categoria: ${categoria}`);
      console.log(`Salário antigo: R$${salario}`);
      console.log(`Aumento: ${aumento * 100}%`);
      console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
      leitor.close();
    });
  });
});