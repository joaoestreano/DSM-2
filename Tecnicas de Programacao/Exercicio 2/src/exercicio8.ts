class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  inferiorEsquerdo: Point;
  superiorDireito: Point;

  constructor(inferiorEsquerdo: Point, superiorDireito: Point) {
    this.inferiorEsquerdo = inferiorEsquerdo;
    this.superiorDireito = superiorDireito;
  }

  area(): number {
    const base = this.superiorDireito.x - this.inferiorEsquerdo.x;
    const altura = this.superiorDireito.y - this.inferiorEsquerdo.y;
    return base * altura;
  }
}

const sd = new Point(3, 5);
const ie = new Point(1, 2);
const r = new Rectangle(ie, sd);
console.log("Área:", r.area());