import Botao2 from "./componentes/Botao2";
import Placar2 from "./componentes/Placar2";
import { Provedor } from "./componentes/contexts/Contexto";

export default function App2() {
  return (
    <>
      <Provedor>
        <Botao2 />
        <Placar2 />
      </Provedor>
      <Placar2 />
    </>
  );
}
