class Cliente {
    private constructor(private nome: string, private idade: number) {}
  
    public static criar(nome: string, idade: number): Cliente {
      return new Cliente(nome, idade);
    }
  
    public print() {
      console.log(this.nome, this.idade);
    }
  }
  
  const cliente = Cliente.criar("João", 30);
  cliente.print();
  