import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Carregar do localStorage na montagem
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");

    if (savedName) setName(savedName);
    if (savedAge) setAge(savedAge);
  }, []);

  // Salvar name sempre que mudar
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  // Salvar age sempre que mudar
  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  return (
    <>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Idade</label>
        <input id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>Nome: {name}</div>
      <div>Idade: {age}</div>
    </>
  );
}
