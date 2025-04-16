class Carro {
    constructor(private _marca: string, private _modelo: string) {}
  
    get marca(): string {
      return this._marca;
    }
  
    get modelo(): string {
      return this._modelo;
    }
  }
  
  const carro = new Carro("VW", "Gol");
  console.log(carro);
  