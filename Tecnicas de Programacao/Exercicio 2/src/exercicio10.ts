class Circulo {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  area(): number {
    return Math.PI * this.raio * this.raio;
  }

  perimetro(): number {
    return 2 * Math.PI * this.raio;
  }
}

const circulo = new Circulo(5);
console.log("Área:", circulo.area().toFixed(2));
console.log("Perímetro:", circulo.perimetro().toFixed(2));