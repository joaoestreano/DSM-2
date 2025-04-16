//Exercício 5
export default function App() {
  const nomes = [
    {
      name: "Ana",
      gender: "F",
    },
    {
      name: "Bruno",
      gender: "M",
    },
    {
      name: "Carla",
      gender: "F",
    },
    {
      name: "Daniel",
      gender: "M",
    },
  ];
  const saida = nomes.map(function (item, indice) {
    return (
      <li key={indice} style={item.gender == "M" ? m : f}>
        {item.name}
      </li>
    );
  });

  return <ol>{saida}</ol>;
}

const f = {
  backgroundColor: "orange",
};
const m = {
  backgroundColor: "palegreen",
};
