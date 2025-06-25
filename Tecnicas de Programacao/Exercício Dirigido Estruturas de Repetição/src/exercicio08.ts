import readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite uma palavra: ", (palavra) => {
    let vogais = 0;
    let consoantes = 0;

    for (let letra of palavra.toLowerCase()) {
        if ("aeiou".includes(letra)) vogais++;
        else if (letra >= 'a' && letra <= 'z') consoantes++;
    }

    console.log("Vogais:", vogais);
    console.log("Consoantes:", consoantes);
    leitor.close();
});