class Point {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    distance(point: Point): number {
      const dx = this.x - point.x;
      const dy = this.y - point.y;
      return Math.sqrt(dx * dx + dy * dy);  
    }
  }
  
  class Rectangle {
    inferiorEsquerdo: Point;
    superiorDireito: Point;

    constructor(ie: Point, sd: Point) {
      this.inferiorEsquerdo = ie;
      this.superiorDireito = sd;
    }

    area(): number {
      const largura = Math.abs(this.superiorDireito.x - this.inferiorEsquerdo.x);
      const altura = Math.abs(this.superiorDireito.y - this.inferiorEsquerdo.y);
      return largura * altura;
    }
  }

  const sd = new Point(3, 5);
  const ie = new Point(1, 2);

  const r = new Rectangle(ie, sd);

  console.log("Área:", r.area());
  