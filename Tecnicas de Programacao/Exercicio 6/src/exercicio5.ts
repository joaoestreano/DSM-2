class Pilha<T> {
    private items: T[] = [];

    push(item: T): void {
        if (this.items.length === 5) {
            throw new Error("Pilha cheia");
        }
        this.items.push(item);
    }

    pop(): T {
        const item = this.items.pop();
        if (item === undefined) {
            throw new Error("Pilha vazia");
        }
        return item;
    }
}

const nomes = ["Ana", "Pedro", "Luiz", "Maria", "Inês", "José"];
const pilha = new Pilha<string>();

for (let nome of nomes) {
    try {
        pilha.push(nome);
    } catch (e: any) {
        console.log(`Erro ao inserir ${nome}: ${e.message}`);
    }
}

try {
    while (true) {
        const item = pilha.pop();
        console.log(item);
    }
} catch (e: any) {
    console.log("Erro:", e.message);
}

console.log("Fim do programa");