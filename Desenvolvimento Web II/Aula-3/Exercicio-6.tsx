import { useState } from "react";

export default function App() {
  const [source, setSource] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  function handleClick(label: string) {
    setSource(label);
    setHistory((prev) => [...prev, label]);
  }

  return (
    <>
      <h3>Origem: {source}</h3>
      <div>
        <Button label="Botão A" set={handleClick} />
        <Button label="Botão B" set={handleClick} />
        <Button label="Botão C" set={handleClick} />
      </div>
      <HistoryList items={history} />
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

function HistoryList({ items }: { items: string[] }) {
  return (
    <>
      <h4>Histórico de cliques:</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
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
