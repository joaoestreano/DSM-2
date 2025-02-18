class Ponto {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    distancia(Ponto: Ponto): number {
      const dx = this.x - Ponto.x;
      const dy = this.y - Ponto.y;
      const distancia = Math.sqrt(dx * dx + dy * dy);
      return parseFloat(distancia.toFixed(2));
    }
  }
  
  const e = new Ponto(3, 5);
  const d = new Ponto(1, 2);
  
  console.log("Distância:", e.distancia(d));
  