class Carro {
    private static contador = 0;
  
    constructor(private _marca: string, private _modelo: string) {
      Carro.contador++;
    }
  
    get marca(): string {
      return this._marca;
    }
  
    get modelo(): string {
      return this._modelo;
    }
  
    public static getContador(): number {
      return Carro.contador;
    }
  }
  
  const a = new Carro("VW", "Gol");
  const b = new Carro("Fiat", "Uno");
  const c = new Carro("GM", "Corsa");
  
  console.log("Quantidade de carros criados:", Carro.getContador());
  