//Exercicio-1

import { CSSProperties, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {setCount((prev) => prev - 1);
  }

  return (
    <>
      <h4>Valor: {count}</h4>
      <div>
       <Button action={decrement} label="Decrementar" />
        <Button action={increment} label="Incrementar" />
      </div>
    </>
  );
}

function Button(props:Props){
  return <button onClick={props.action}>{props.label}</button>
}

interface Props { 
  action: () => void; 
  label: string; 
}

const buttonStyle: CSSProperties = {
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
