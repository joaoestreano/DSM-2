//Exercicio 5
import { useState } from "react";

export default function App() {
  const [source, setSource] = useState("");

  return (
    <>
      <h3>Origem: {source}</h3>
      <div>
        <Button label="Botão A" set={setSource} />
        <Button label="Botão B" set={setSource} />
        <Button label="Botão C" set={setSource} />
      </div>
    </>
  );
}

function Button({ label, set }: Props) {
  return (
    <button style={buttonStyle} onClick={() => set(label)}>
      {label}
    </button>
  );
}

interface Props {
  label: string;
  set: (value: string) => void;
}

const buttonStyle = {
  backgroundColor: "#567196",
  color: "white",
  padding: "10px 20px",
  marginRight: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
