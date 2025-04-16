//Exemplo 

import { useState } from "react";

export default function App() {
  const [nro, setNro] = useState(0);

  function inc() {
    setNro(nro + 1);
  }

  function dec() {
    setNro(nro - 1);
  }

  return (
    <div>
      <div>Número: {nro}</div>
      <div>
        <Botao rotulo="-" clique={dec} />
        <Botao rotulo="+" clique={inc} />
      </div>
    </div>
  );
}

function Botao(props: Props) {
  return <button onClick={props.clique} style={buttonStyle}>{props.rotulo}</button>;
}

interface Props {
  rotulo: string;
  clique: () => void;
}

const buttonStyle = {
  backgroundColor: "#567196",
  color:"#fff",
  fontWeight: "bold"
};
