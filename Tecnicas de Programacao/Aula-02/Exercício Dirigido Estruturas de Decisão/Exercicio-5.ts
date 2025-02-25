// Função para calcular se o candidato foi eleito e mostrar os percentuais
function verificarEleicao(): void {
    // Solicitar ao candidato os dados necessários
    var totalEleitores: number = parseInt(prompt("Digite o número total de eleitores:") || "0");
    var votosBrancos: number = parseInt(prompt("Digite o número de votos brancos:") || "0");
    var votosNulos: number = parseInt(prompt("Digite o número de votos nulos:") || "0");
    var votosValidos: number = parseInt(prompt("Digite o número de votos válidos:") || "0");
    var votosObtidos: number = parseInt(prompt("Digite o número de votos obtidos:") || "0");

    // Calcular a soma dos votos válidos e brancos
    var somaVotosValidosBrancos: number = votosValidos + votosBrancos;

    // Calcular o percentual de votos obtidos sobre a soma dos votos válidos + brancos
    var percentualVotos: number = (votosObtidos / somaVotosValidosBrancos) * 100;

    // Calcular o percentual de votos obtidos em relação ao total de eleitores
    var percentualTotalEleitores: number = (votosObtidos / totalEleitores) * 100;

    // Verificar se o candidato foi eleito (mais de 10% dos votos válidos + brancos)
    if (percentualVotos > 10) {
        console.log("Você foi eleito!");
    } else {
        console.log("Você não foi eleito.");
    }

    // Exibir os percentuais
    console.log(`Você obteve ${percentualVotos.toFixed(2)}% dos votos válidos + brancos.`);
    console.log(`O percentual de votos que você obteve em relação ao total de eleitores é: ${percentualTotalEleitores.toFixed(2)}%.`);
}

// Chamar a função para verificar se o candidato foi eleito
verificarEleicao();
