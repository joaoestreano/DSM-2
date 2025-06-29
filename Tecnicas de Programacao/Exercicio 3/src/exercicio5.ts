class Matematica {
  nro: number;

  constructor(nro: number) {
    this.nro = nro;
  }

  calcular(): void {}
}

class Multiplicar extends Matematica {
  calcular(): void {
    for (let i = 0; i <= 10; i++) {
      console.log(`${this.nro} * ${i} = ${this.nro * i}`);
    }
  }
}

class Somar extends Matematica {
  calcular(): void {
    for (let i = 0; i <= 10; i++) {
      console.log(`${this.nro} + ${i} = ${this.nro + i}`);
    }
  }
}

const a: Matematica = new Somar(5);
a.calcular();
const b: Matematica = new Multiplicar(5);
b.calcular();