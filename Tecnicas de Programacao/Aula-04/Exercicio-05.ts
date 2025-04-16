class Carro {
    constructor(private _marca: string, private _modelo: string) {}
  
    get marca(): string {
      return this._marca;
    }
  
    get modelo(): string {
      return this._modelo;
    }
  }
  
  const carros: Carro[] = [
    new Carro("VW", "Gol"),
    new Carro("Fiat", "Uno"),
    new Carro("GM", "Corsa")
  ];
  
  console.log(carros);
  