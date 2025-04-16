interface Person {
    name: string;
    age: number;
  }
  
  ...
  
  const [age, setAge] = useState<number | "">("");
  
  ...
  
  <input
    type="number"
    min="0"
    value={age}
    onChange={(e) => {
      const value = e.target.value;
      setAge(value === "" ? "" : Number(value));
    }}
  />
  
  ...
  
  function save() {
    if (name && age !== "") {
      setPeople([{ name, age: Number(age) }, ...people]);
      setName("");
      setAge("");
    }
  }
  