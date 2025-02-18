class Numero {
    nros: number[] = [];

    add(nro: number): void {
      this.nros.push(nro);
    }

    sum(): number {
      let s = 0;
      for (let i = 0; i < this.nros.length; i++) {
        s += this.nros[i];
      }
      return s;
    }

    max(): number {
      let maior = this.nros[0];
      for (let i = 1; i < this.nros.length; i++) {
        if (this.nros[i] > maior) {
          maior = this.nros[i];
        }
      }
      return maior;
    }
  }

  const numero = new Numero();

  numero.add(12);
  numero.add(24);
  numero.add(31);
  numero.add(5);
  numero.add(16);

  console.log("Somatório:", numero.sum());
  console.log("Maior valor:", numero.max());
  