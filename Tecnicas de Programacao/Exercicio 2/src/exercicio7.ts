class Ponto {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distancia(p: Ponto): number {
    return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
  }
}

const a = new Ponto(3, 5);
const b = new Ponto(1, 2);
console.log("Distância:", a.distancia(b));