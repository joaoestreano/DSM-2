//Exercicio-2

export default function App() {
  return <Message/>;
  }

function Message() {
  // Obtém a hora atual (0-23)
  const currentHour = new Date().getHours();
  
  // Usando o operador ternário
  const greeting: string = currentHour < 12 ? 
  "Bom dia!" : currentHour < 18 ? 
  "Boa tarde!" : "Boa noite!";
  
  return <div>{greeting}</div>;
}
