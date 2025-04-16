function operar<T, U>(v1: T[], v2: U[]): Array<string> {
    let res: string[] = [];
    for (let i = 0; i < v1.length; i++) {
      res[i] = `${v1[i]}${v2[i]}`;
    }
    return res;
  }
  
  const vet1: number[] = [5, 3, 1, 8, 2];
  const vet2: string[] = ["M", "a", "r", "i", "a"];
  console.log("Resultado:", operar(vet1, vet2));
  