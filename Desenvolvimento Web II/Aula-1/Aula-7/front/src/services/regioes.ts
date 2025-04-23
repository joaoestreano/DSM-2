import api from "./api";
import { RegiaoProps, MesorregiaoProps } from "../types";

export async function getRegioes(): Promise<RegiaoProps[] | { erro: string }> {
  try {
    const { data } = await api.get("/regioes");
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) return { erro: e.message };
    return { erro: "Erro desconhecido" };
  }
}

export async function getEstados(id: number): Promise<{ id: number; nome: string }[] | { erro: string }> {
  try {
    const { data } = await api.get(`/regioes/${id}/estados`);
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) return { erro: e.message };
    return { erro: "Erro desconhecido" };
  }
}

// Nova função para buscar mesorregiões de um estado
export async function getMesorregioes(estadoId: number): Promise<MesorregiaoProps[] | { erro: string }> {
  try {
    const { data } = await api.get(`/estados/${estadoId}/mesorregioes`);
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) return { erro: e.message };
    return { erro: "Erro desconhecido" };
  }
}
