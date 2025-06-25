class Questao {
  enunciado: string;
  dificuldade: number;

  constructor(enunciado: string, dificuldade: number) {
    this.enunciado = enunciado;
    this.dificuldade = dificuldade;
  }

  print(): void {
    console.log(`${this.enunciado} (${this.dificuldade})`);
  }
}

const questao = new Questao("O que é um array?", 0.5);
questao.print();