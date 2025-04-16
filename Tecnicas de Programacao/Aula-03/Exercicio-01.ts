class Operacao {
    somar(a: number, b: number): number {
      return a + b;
    }
  }
  
  class Calcular extends Operacao {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      super();  // Chama o construtor da superclasse (Operacao)
      this.x = x;
      this.y = y;
    }
  
    somar(): number {
      return super.somar(this.x, this.y);  // Chama o método somar da superclasse
    }
  }
  
  const c = new Calcular(5, 15);
  console.log("Somar:", c.somar());  // Resultado esperado: 20
  