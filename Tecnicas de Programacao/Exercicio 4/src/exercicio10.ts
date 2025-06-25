class Numero {
  protected aleatorio(): number {
    return Math.floor(Math.random() * 100);
  }
}

class Categoria extends Numero {
  protected aleatorio(): number {
    return super.aleatorio();
  }
}

class Teste extends Categoria {
  public valor(): number {
    return this.aleatorio();
  }
}

const teste = new Teste();
console.log("Valor:", teste.valor());