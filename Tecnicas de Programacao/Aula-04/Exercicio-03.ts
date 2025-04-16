class Carro {
    private _marca: string;
    private _modelo: string;
  
    get marca(): string {
      return this._marca;
    }
  
    set marca(marca: string) {
      this._marca = marca;
    }
  
    get modelo(): string {
      return this._modelo;
    }
  
    set modelo(modelo: string) {
      this._modelo = modelo;
    }
  }
  
  const carro = new Carro();
  carro.marca = "VW";
  carro.modelo = "Gol";
  console.log(carro);
  