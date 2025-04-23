import { useEffect, useState } from "react";
import { getRegioes, getEstados, getMesorregioes } from "./services/regioes";
import { RegiaoProps, MesorregiaoProps } from "./types";

interface Estado {
  id: number;
  nome: string;
}

export default function App() {
  const [regioes, setRegioes] = useState<RegiaoProps[]>([]);
  const [estados, setEstados] = useState<Estado[]>([]);
  const [mesorregioes, setMesorregioes] = useState<MesorregiaoProps[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  // Etapa de navegação (1 = regiões, 2 = estados, 3 = mesorregiões)
  const [etapa, setEtapa] = useState<1 | 2 | 3>(1);

  // Salva o nome da região/estado selecionado (opcional, pra exibir título)
  const [regiaoSelecionada, setRegiaoSelecionada] = useState<string>("");
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>("");

  useEffect(() => {
    async function fetchRegioes() {
      const res = await getRegioes();
      if (Array.isArray(res)) {
        setRegioes(res);
      } else {
        setErro(res.erro);
      }
    }

    fetchRegioes();
  }, []);

  async function handleClickRegiao(id: number, nome: string) {
    const res = await getEstados(id);
    if (Array.isArray(res)) {
      setEstados(res);
      setMesorregioes([]);
      setRegiaoSelecionada(nome);
      setEtapa(2);
    } else {
      setErro(res.erro);
    }
  }

  async function handleClickEstado(estadoId: number, nome: string) {
    const res = await getMesorregioes(estadoId);
    if (Array.isArray(res)) {
      setMesorregioes(res);
      setEstadoSelecionado(nome);
      setEtapa(3);
    } else {
      setErro(res.erro);
    }
  }

  // Funções para voltar etapas
  function voltarParaRegioes() {
    setEtapa(1);
    setEstados([]);
    setMesorregioes([]);
    setRegiaoSelecionada("");
    setEstadoSelecionado("");
  }

  function voltarParaEstados() {
    setEtapa(2);
    setMesorregioes([]);
    setEstadoSelecionado("");
  }

  return (
    <div>
      <h1>Regiões do Brasil</h1>

      {erro && <p style={{ color: "red" }}>Erro: {erro}</p>}

      {/* Etapa 1 – Regiões */}
      {etapa === 1 && (
        <>
          <h2>Escolha uma Região:</h2>
          <ul>
            {regioes.map((regiao) => (
              <li
                key={regiao.id}
                style={{ cursor: "pointer", marginBottom: 8 }}
                onClick={() => handleClickRegiao(regiao.id, regiao.nome)}
              >
                {regiao.nome}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Etapa 2 – Estados */}
      {etapa === 2 && (
        <>
          <button onClick={voltarParaRegioes}>← Voltar para Regiões</button>
          <h2>Estados da Região {regiaoSelecionada}</h2>
          <ul>
            {estados.map((estado) => (
              <li
                key={estado.id}
                style={{ cursor: "pointer", marginLeft: 16 }}
                onClick={() => handleClickEstado(estado.id, estado.nome)}
              >
                {estado.nome}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Etapa 3 – Mesorregiões */}
      {etapa === 3 && (
        <>
          <button onClick={voltarParaEstados}>← Voltar para Estados</button>
          <h2>Mesorregiões de {estadoSelecionado}</h2>
          <ul>
            {mesorregioes.map((meso) => (
              <li key={meso.id} style={{ marginLeft: 32 }}>
                {meso.nome}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
