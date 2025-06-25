import readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Total de eleitores: ", (te) => {
  rl.question("Votos brancos: ", (vb) => {
    rl.question("Votos nulos: ", (vn) => {
      rl.question("Votos válidos: ", (vv) => {
        rl.question("Seus votos: ", (sv) => {
          const total = parseInt(te);
          const validos = parseInt(vv) + parseInt(vb);
          const seus = parseInt(sv);
          const perc = (seus / validos) * 100;
          const geral = (seus / total) * 100;

          if (perc > 10) {
            console.log("Eleito com", geral.toFixed(2) + "% dos votos.");
          } else {
            console.log("Não eleito. Obteve", geral.toFixed(2) + "% dos votos.");
          }
          rl.close();
        });
      });
    });
  });
});