function somar(a: number, b: number): number | string {
    if (a < b) {
      return a + b; // soma
    } else {
      return "" + a + b; // concatena como string
    }
  }
  
  console.log("Resultado:", somar(1, 2)); // 3
  console.log("Resultado:", somar(5, 3)); // "53"
  