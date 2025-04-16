import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Rotas />
    </BrowserRouter>
  );
}

function Menu() {
  return (
    <div>
      <Link to="/legume">Legume</Link> | 
      <Link to="/verdura">Verdura</Link> | 
      <Link to="/fruta">Fruta</Link>
    </div>
  );
}

function Rotas() {
  return (
    <Routes>
      <Route path="/legume" element={<Legume />} />
      <Route path="/verdura" element={<Verdura />} />
      <Route path="/fruta" element={<Fruta />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  );
}

function Legume() {
  return (
    <div style={{ backgroundColor: "PeachPuff" }}>
      <div>Beterraba</div>
      <div>Cenoura</div>
    </div>
  );
}

function Verdura() {
  return (
    <div style={{ backgroundColor: "palegreen" }}>
      <div>Alface</div>
      <div>Couve</div>
    </div>
  );
}

function Fruta() {
  return (
    <div style={{ backgroundColor: "LemonChiffon" }}>
      <div>Laranja</div>
      <div>Manga</div>
    </div>
  );
}

function Erro() {
  return <h3>Rota inexistente</h3>;
}

export default App;
