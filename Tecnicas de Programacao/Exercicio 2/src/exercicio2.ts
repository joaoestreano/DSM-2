class Retangulo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  area(): number {
    return this.base * this.altura;
  }

  perimetro(): number {
    return 2 * (this.base + this.altura);
  }
}

const r = new Retangulo(4, 6);
console.log("Área:", r.area());
console.log("Perímetro:", r.perimetro());