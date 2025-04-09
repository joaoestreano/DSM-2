import { useEffect, useState } from "react";

export default function Exercicio1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");
    if (savedName) setName(savedName);
    if (savedAge) setAge(savedAge);
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  return (
    <div>
      <h2>Exercício 1</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Idade" />
      <div>Nome: {name}</div>
      <div>Idade: {age}</div>
    </div>
  );
}
