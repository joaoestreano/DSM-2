import { CSSProperties, useState } from "react";

interface Person {
  name: string;
  age: string;
}

const table: CSSProperties = {
  tableLayout: "auto",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const cell: CSSProperties = {
  border: "1px solid black",
  padding: "5px",
  whiteSpace: "nowrap",
};

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState<Person[]>([]);

  function save() {
    setPeople([{ name, age }, ...people]);
    setName("");
    setAge("");
  }

  return (
    <>
      <div>
        <label>Nome:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Idade:</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <button onClick={save}>Salvar</button>
      <table style={table}>
        <thead>
          <tr>
            <th style={cell}>Nome</th>
            <th style={cell}>Idade</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, i) => (
            <tr key={i}>
              <td style={cell}>{p.name}</td>
              <td style={cell}>{p.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
