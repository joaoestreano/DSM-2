class Matematica {
  nro: number;

  constructor(nro: number) {
    this.nro = nro;
  }

  calcular(): void {}
}

class Subtrair extends Matematica {
  calcular(): void {
    for (let i = 0; i <= 10; i++) {
      console.log(`${this.nro} - ${i} = ${this.nro - i}`);
    }
  }
}

const c: Matematica = new Subtrair(5);
c.calcular();