class Carro {
  private _marca: string = "";
  private _modelo: string = "";

  set marca(valor: string) {
    this._marca = valor;
  }

  set modelo(valor: string) {
    this._modelo = valor;
  }

  get marca(): string {
    return this._marca;
  }

  get modelo(): string {
    return this._modelo;
  }
}

const carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
console.log(carro);