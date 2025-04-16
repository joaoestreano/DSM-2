//Exercicio-3

const dia = {
  backgroundColor: 'yellow'
};

const tarde = {
  backgroundColor: 'orange'
};

const noite = {
  backgroundColor: '#888'
};

export default function App() {
  return <Message />;
}

function Message() {
  // Obtém a hora atual (0-23)
  const currentHour = new Date().getHours();
  
  // Usando o operador ternário para definir a saudação
  const greeting: string = currentHour < 12 
    ? "Bom dia!" 
    : currentHour < 18 
    ? "Boa tarde!" 
    : "Boa noite!";

  // Usando o operador ternário para escolher o estilo
  const style = currentHour < 12 
    ? dia 
    : currentHour < 18 
    ? tarde 
    : noite;

  return <div style={style}>{greeting}</div>;
}
