import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros: number[] = [];

function perguntar() {
    if (numeros.length < 10) {
        rl.question(\`Digite o número \${numeros.length + 1} (1-100): \`, (input) => {
            const numero = parseInt(input);
            if (numero < 1 || numero > 100 || numeros.includes(numero)) {
                console.log("Número inválido ou repetido.");
            } else {
                numeros.push(numero);
            }
            perguntar();
        });
    } else {
        const soma = numeros.reduce((acc, cur) => acc + cur, 0);
        const menor = Math.min(...numeros);
        const maior = Math.max(...numeros);
        const ordenados = [...numeros].sort((a, b) => a - b);

        console.log("Números:", numeros);
        console.log("Menor:", menor);
        console.log("Maior:", maior);
        console.log("Soma:", soma);
        console.log("Ordenados:", ordenados);
        rl.close();
    }
}

perguntar();