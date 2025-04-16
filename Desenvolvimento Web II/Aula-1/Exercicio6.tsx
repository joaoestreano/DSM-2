//Exercício 6
export default function App() {
  const nomes = [
    {
      name: "Ana",
      gender: "F",
      age: 21,
    },
    {
      name: "Bruno",
      gender: "M",
      age: 17,
    },
    {
      name: "Carla",
      gender: "F",
      age: 15,
    },
    {
      name: "Daniel",
      gender: "M",
      age: 22,
    },
  ];
  const saida = nomes.map(function (item, indice) {
    return (
      <li key={indice} style={item.gender == "M" ? m : f}>
        {item.name} {item.age < 18 && "(menor)"} 
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
