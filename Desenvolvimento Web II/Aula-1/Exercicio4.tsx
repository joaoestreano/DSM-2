//Exercício 4
export default function App() {
  const nomes = ["Ana", "Bruno", "Carla", "Daniel"];
  const saida = nomes.map(function (item, indice) {
    return <li key={indice}>{item}</li>;
  });

  return <ol>{saida}</ol>;
}