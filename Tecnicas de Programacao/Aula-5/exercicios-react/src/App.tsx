import { useState } from "react";
import Exercicio1 from "./pages/Exercicio1";
import Exercicio2 from "./pages/Exercicio2";
import Exercicio3 from "./pages/Exercicio3";

export default function App() {
  const [page, setPage] = useState<"1" | "2" | "3">("1");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Exercícios React - useEffect + Context + localStorage</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("1")}>Exercício 1</button>
        <button onClick={() => setPage("2")}>Exercício 2</button>
        <button onClick={() => setPage("3")}>Exercício 3</button>
      </div>

      {page === "1" && <Exercicio1 />}
      {page === "2" && <Exercicio2 />}
      {page === "3" && <Exercicio3 />}
    </div>
  );
}
