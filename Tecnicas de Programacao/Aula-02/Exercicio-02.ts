class Retangulo {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
    }
    area(): number {
    return this.base * this.altura;
    }
    perimetro(): number {
    return 2 * this.base + 2 * this.altura;
    }
    print(): void {
        console.log(`A Área é: ${this.area()} e possui perimetro de:${this.perimetro()} .`);
        }
    }
    const w = new Retangulo(4, 3);
    const z = new Retangulo(6, 4);    
    w.print();
    z.print(); 