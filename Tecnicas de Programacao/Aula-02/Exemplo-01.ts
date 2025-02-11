class Pessoa {
    nome:string;
    idade:number;
    constructor(a:string, b:number){
    this.nome = a;
    this.idade = b;
    }
    imprimir(){
    console.log(`${this.nome} possui ${this.idade} anos`);
    }
    }
    const x = new Pessoa("Ana",18);
    const y = new Pessoa("Pedro",20);
    x.imprimir();
    y.imprimir();