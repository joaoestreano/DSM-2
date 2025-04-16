//Exercicio-4

#Exercício 4
import { useState } from "react";
export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  function add(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  function remove(index: number) {
    setUsers(users.filter((_, i) => i !== index));
  }

  return (
    <>
      <Form add={add} />
      <List users={users} remove={remove} />
    </>
  );
}

function Form(props: FormProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <div>
        <label>Nome</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Idade</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <button onClick={() => props.add({ name, age })}>Salvar</button>
    </div>
  );
}

function List(props: ListProps) {

  function handle(e:React.MouseEvent, indice:number){
    e.preventDefault();
    props.remove(indice)
  }

  return (
    <ol>
      {props.users.map((item, indice) => (
        <li key={indice} onContextMenu={(e) => handle(e,indice)}>{item.name}</li>
      ))}
    </ol>
  );
}

interface User {
  name: string;
  age: string;
}

interface FormProps {
  add: (user: User) => void;
}

interface ListProps {
  users: User[];
  remove: (index: number) => void;
}
