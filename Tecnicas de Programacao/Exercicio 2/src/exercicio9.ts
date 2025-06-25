class Numero {
  nros: number[] = [];

  add(nro: number): void {
    this.nros.push(nro);
  }

  sum(): number {
    return this.nros.reduce((acc, val) => acc + val, 0);
  }

  max(): number {
    return Math.max(...this.nros);
  }
}

const n = new Numero();
n.add(8);
n.add(2);
n.add(9);
n.add(4);
n.add(5);

console.log("Somatório:", n.sum());
console.log("Maior valor:", n.max());