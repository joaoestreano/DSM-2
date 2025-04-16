import styled from 'styled-components';
import { useSuggestionContext } from '../context/SuggestionContext';

const Container = styled.div`
  padding: 2rem;
`;

const Item = styled.div`
  margin-bottom: 0.5rem;
`;

const History = () => {
  const { suggestions } = useSuggestionContext();

  return (
    <Container>
      <h2>Histórico de sugestões</h2>
      {suggestions.map((sug, index) => (
        <Item key={index}>{sug.join(', ')}</Item>
      ))}
    </Container>
  );
};

export default History;
