export interface Cidade {
  id: number;
  nome: string;
  lon: number;
  lat: number;
  anual: number;
  jan: number;
  fev: number;
  mar: number;
  abr: number;
  mai: number;
  jun: number;
  jul: number;
  ago: number;
  set: number;
  out: number;
  nov: number;
  dez: number;
  geom: {
    type: string;
    coordinates: [number, number][][];
  };
}