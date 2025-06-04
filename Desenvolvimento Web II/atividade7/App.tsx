import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListaDeCidades from './src/components/ListaDeCidades';
import Mapa from './src/components/Mapa';
import { Cidade } from './Types/index';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<Cidade | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/cidade')
      .then(res => res.json())
      .then(data => setCidades(data))
      .catch(err => console.error('Erro ao buscar cidades:', err));
  }, []);

  const handleSelecionarCidade = async (id: number) => {
    const res = await fetch(`http://localhost:3000/cidade/${id}`);
    const data = await res.json();
    setCidadeSelecionada(data);
  };

  return (
    <Container>
      <ListaDeCidades cidades={cidades} onSelect={handleSelecionarCidade} />
      <Mapa cidade={cidadeSelecionada} />
    </Container>
  );
}

export default App;
