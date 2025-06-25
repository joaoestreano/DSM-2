import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro: ", (input) => {
    const numero = parseInt(input);
    let divisores = [];

    for (let i = 2; i <= numero; i++) {
        while (numero % i === 0) {
            divisores.push(i);
            numero /= i;
        }
    }

    const unicos = [...new Set(divisores)];
    if (unicos.length === 1) {
        console.log("Número primo.");
    } else {
        console.log("Fatores primos:", unicos.join(", "));
    }
    rl.close();
});