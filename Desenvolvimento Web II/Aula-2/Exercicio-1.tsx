import { useState } from "react";

interface Person {
  name: string;
  age: string;
}

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState<Person[]>([]);

  function save() {
    setPeople([...people, { name, age }]);
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
      <ul>
        {people.map((p, i) => (
          <li key={i}>
            {p.name} - {p.age}
          </li>
        ))}
      </ul>
    </>
  );
}
