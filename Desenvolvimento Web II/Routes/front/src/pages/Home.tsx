import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
`;

const Link = styled.p`
  color: blue;
  cursor: pointer;
  margin-top: 1rem;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Bem-vindo ao Gerador de Palpites</h1>
      <Button onClick={() => navigate('/palpite')}>Clique para começar</Button>
      <Link onClick={() => navigate('/palpite')}>Palpite</Link>
      <Link onClick={() => navigate('/historico')}>Histórico</Link>
    </Container>
  );
};

export default Home;
