class Geometria {
  area(): number {
    return 0;
  }
}

class Quadrado extends Geometria {
  lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  area(): number {
    return this.lado * this.lado;
  }
}

let geom: Geometria = new Quadrado(5);
console.log("Quadrado:", geom.area());