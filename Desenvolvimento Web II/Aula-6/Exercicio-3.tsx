import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";

const PersonContext = createContext(null);

function PersonProvider({ children }) {
  const [list, setList] = useState([]);
  function add(person) {
    setList(prev => [...prev, person]);
  }
  return (
    <PersonContext.Provider value={{ list, add }}>
      {children}
    </PersonContext.Provider>
  );
}

function usePerson() {
  const context = useContext(PersonContext);
  if (!context) throw new Error("usePerson deve ser usado dentro de PersonProvider");
  return context;
}

function App() {
  return (
    <PersonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </PersonProvider>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { add } = usePerson();
  const navigate = useNavigate();

  function handleSubmit() {
    add({ name, age });
    setName("");
    setAge("");
    navigate("/list");
  }

  return (
    <div>
      <h3>Formulário</h3>
      <div>
        <label>Nome</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Idade</label>
        <input value={age} onChange={e => setAge(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Salvar</button>
      <br />
      <Link to="/list">Ver Lista</Link>
    </div>
  );
}

function List() {
  const { list } = usePerson();
  return (
    <div>
      <h3>Cadastro</h3>
      <ol>
        {list.map((item, i) => (
          <li key={i}>{item.name} - {item.age}</li>
        ))}
      </ol>
      <Link to="/form">Voltar ao Formulário</Link>
    </div>
  );
}

function Erro() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Rota inexistente</h3>
      <button onClick={() => navigate("/form")}>Voltar</button>
    </div>
  );
}

export default App;
