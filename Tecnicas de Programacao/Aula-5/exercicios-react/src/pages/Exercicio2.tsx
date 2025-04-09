import { createContext, useContext, useEffect, useState } from "react";

export default function Exercicio2() {
  return (
    <UserProvider>
      <h2>Exercício 2</h2>
      <Form />
      <List />
    </UserProvider>
  );
}

interface User {
  name: string;
  age: string;
}
interface ContextProps {
  users: User[];
  add: (user: User) => void;
}
interface ChildrenProps {
  children: React.ReactNode;
}

const UserContext = createContext<ContextProps | null>(null);

function UserProvider({ children }: ChildrenProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) setUsers(JSON.parse(savedUsers));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function add(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  return (
    <UserContext.Provider value={{ users, add }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext deve ser usado dentro de um UserProvider");
  return context;
}

function Form() {
  const { add } = useUserContext();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Idade" />
      <button onClick={() => add({ name, age })}>Salvar</button>
    </div>
  );
}

function List() {
  const { users } = useUserContext();
  return (
    <ol>
      {users.map((user, i) => (
        <li key={i}>{user.name} - {user.age}</li>
      ))}
    </ol>
  );
}
