import api from "./api";

export async function getRegioes(): Promise<string[] | { erro: string }> {
  try {
    const { data } = await api.get("/regioes");
    return data.map((regiao: { nome: string }) => regiao.nome);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { erro: e.message };
    }
    return { erro: "Erro desconhecido" };
  }
}
