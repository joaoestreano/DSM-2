class Filme {
  titulo: string;
  duracao: number;

  constructor(titulo: string, duracao: number) {
    this.titulo = titulo;
    this.duracao = duracao;
  }

  print(): void {
    console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
  }
}

const f1 = new Filme("De volta para o futuro", 116);
const f2 = new Filme("Matrix", 136);
f1.print();
f2.print();