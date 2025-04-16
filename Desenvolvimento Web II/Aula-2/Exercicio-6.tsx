interface Person {
    name: string;
    age: number;
    gender: string;
  }
  
  ...
  
  const [gender, setGender] = useState("Masculino");
  
  ...
  
  <div>
    <label>Gênero:</label>
    <select value={gender} onChange={(e) => setGender(e.target.value)}>
      <option value="Masculino">Masculino</option>
      <option value="Feminino">Feminino</option>
      <option value="Outro">Outro</option>
    </select>
  </div>
  
  ...
  
  function save() {
    if (name && age !== "") {
      setPeople([{ name, age: Number(age), gender }, ...people]);
      setName("");
      setAge("");
      setGender("Masculino");
    }
  }
  
  ...
  
  <thead>
    <tr>
      <th style={cell}>Nome</th>
      <th style={cell}>Idade</th>
      <th style={cell}>Gênero</th>
    </tr>
  </thead>
  <tbody>
    {people.map((p, i) => (
      <tr key={i} onContextMenu={(e) => handleRightClick(e, i)}>
        <td style={cell}>{p.name}</td>
        <td style={cell}>{p.age}</td>
        <td style={cell}>{p.gender}</td>
      </tr>
    ))}
  </tbody>
  