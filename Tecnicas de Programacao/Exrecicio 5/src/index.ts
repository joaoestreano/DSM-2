export type Ponto = {
  x: number;
  y: number;
};

export interface Retangulo {
  infEsquerdo: Ponto;
  supDireito: Ponto;
};

export abstract class Livro {
  constructor(protected titulo: string, protected ano: number) {}
  abstract print(): void;
}

export class Pilha<T> {
  private items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
}

interface Automovel {
  velocidade: number;
  coeficiente: number;
  frenagem(): number;
}

export interface Carro extends Automovel {
  consumo: number;
  gasto(distancia: number): number;
}

export abstract class Imc {
  constructor(protected peso: number, protected altura: number) {}
  getImc() {
    return this.peso / this.altura ** 2;
  }
  abstract classificacao(): string;
}

export default interface Geometria {
  area(): number;
  perimetro(): number;
}