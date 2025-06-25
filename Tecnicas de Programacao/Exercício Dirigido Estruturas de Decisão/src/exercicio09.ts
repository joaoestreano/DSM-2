import readline from 'readline';
const leitor = readline.createInterface({ input: process.stdin, output: process.stdout });

leitor.question("Digite um número de 1 a 12: ", (entrada) => {
  const mes = parseInt(entrada);
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  if (mes >= 1 && mes <= 12) {
    console.log("Mês:", meses[mes - 1]);
  } else {
    console.log("Número inválido. Digite entre 1 e 12.");
  }
  leitor.close();
});