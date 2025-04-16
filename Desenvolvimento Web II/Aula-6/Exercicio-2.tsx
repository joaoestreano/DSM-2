import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null);

function LoginProvider({ children }) {
  const [logado, setLogado] = useState(false);
  return (
    <LoginContext.Provider value={{ logado, setLogado }}>
      {children}
    </LoginContext.Provider>
  );
}

function useLogado() {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogado deve ser usado dentro de LoginProvider");
  return context;
}

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Menu />
        <Rotas />
      </BrowserRouter>
    </LoginProvider>
  );
}

function Menu() {
  const { logado, setLogado } = useLogado();
  return (
    <div>
      <button onClick={() => setLogado(!logado)}>
        {logado ? "Logout" : "Login"}
      </button>
      <Link to="/legume">Legume</Link> | 
      <Link to="/verdura">Verdura</Link> | 
      <Link to="/fruta">Fruta</Link> | 
      <Link to="/carro">Carro</Link> | 
      <Link to="/moto">Moto</Link>
    </div>
  );
}

function Rotas() {
  const { logado } = useLogado();
  return logado ? <RotasDiurnas /> : <RotasVeiculos />;
}

function RotasDiurnas() {
  return (
    <Routes>
      <Route path="/legume" element={<Legume />} />
      <Route path="/verdura" element={<Verdura />} />
      <Route path="/fruta" element={<Fruta />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  );
}

function RotasVeiculos() {
  return (
    <Routes>
      <Route path="/carro" element={<Carro />} />
      <Route path="/moto" element={<Moto />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  );
}

function Legume() {
  return (
    <div style={{ backgroundColor: "PeachPuff" }}>
      <div>Beterraba</div><div>Cenoura</div>
    </div>
  );
}
function Verdura() {
  return (
    <div style={{ backgroundColor: "palegreen" }}>
      <div>Alface</div><div>Couve</div>
    </div>
  );
}
function Fruta() {
  return (
    <div style={{ backgroundColor: "LemonChiffon" }}>
      <div>Laranja</div><div>Manga</div>
    </div>
  );
}
function Carro() {
  return (
    <div style={{ backgroundColor: "LightSkyBlue" }}>
      <div>Gol</div><div>Uno</div>
    </div>
  );
}
function Moto() {
  return (
    <div style={{ backgroundColor: "Wheat" }}>
      <div>CG160</div><div>DT180</div>
    </div>
  );
}
function Erro() {
  return <h3>Rota inexistente</h3>;
}

export default App;
