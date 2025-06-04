import * as React from 'react';
import styled from 'styled-components';
import { Cidade } from '../../Types/index';

const Lista = styled.div`
  width: 200px;
  overflow-y: scroll;
  border-right: 1px solid #ccc;
`;

const Item = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

interface Props {
  cidades: Cidade[];
  onSelect: (id: number) => void;
}

const ListaDeCidades: React.FC<Props> = ({ cidades, onSelect }) => (
  <Lista>
    {cidades.map((cidade) => (
      <Item key={cidade.id} onClick={() => onSelect(cidade.id)}>
        {cidade.nome}
      </Item>
    ))}
  </Lista>
);

export default ListaDeCidades;
