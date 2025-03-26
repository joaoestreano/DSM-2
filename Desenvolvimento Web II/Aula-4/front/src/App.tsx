import { useState } from "react";
import Placar from "./componentes/Placar";
import Botao from "./componentes/Botao";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Botao count={count} setCount={setCount} />
      <Placar quant={count} />
    </>
  );
}