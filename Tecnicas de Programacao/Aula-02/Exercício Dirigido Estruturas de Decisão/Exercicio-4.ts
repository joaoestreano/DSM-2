// Função para classificar a idade
function categoriaIdade(idade: number): void {
    var categoria: string;
    
//passara por tudo até um caso qye se encaixe
    if (idade >= 0 && idade <= 10) {
        categoria = "Criança";
    } else if (idade >= 11 && idade <= 13) {
        categoria = "Pré-Adolescente";
    } else if (idade >= 14 && idade <= 17) {
        categoria = "Adolecente";
    } else if (idade >= 18 && idade <= 59) {
        categoria = "Adulto";
    } else if (idade >= 60){
        categoria = "Idoso"
    } else {
        categoria = "Idade inválida.";
    }

    console.log("Categoria: " + categoria);
}

// Receber o valor da idade do usuário
var idadeUsuario: number = parseInt(prompt("Digite sua idade:") || "0");

// Chamar a função para classificar a idade
categoriaIdade(idadeUsuario);