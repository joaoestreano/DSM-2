//Valores das notas
let NotaA: number = 8 
let NotaB: number = 7.5
let NotaC: number = 9  

//colocando as notas em um array
let notas: number[] = [NotaA, NotaB, NotaC]; 

//loop para calcular cada termo da array 
for(let i = 0; i<notas.length;i++){
    let media = notas[i];
    console.log('A média do aluno ${i+1} é: ${media}');
}
