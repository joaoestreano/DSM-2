import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { Cidade } from '../../Types/index';

const MapaWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const Painel = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  z-index: 999;
`;

interface Props {
  cidade: Cidade | null;
}

const Mapa: React.FC<Props> = ({ cidade }) => {
  const centro: [number, number] = cidade ? [cidade.lat, cidade.lon] : [-14.235, -51.925];
  const zoom = cidade ? 12 : 4;

  const polygon = cidade?.geom?.coordinates?.[0]?.map(([lng, lat]: [number, number]) => [lat, lng]) || [];

  return (
    <MapaWrapper>
      <MapContainer center={centro} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {cidade && (
          <>
            <Marker position={[cidade.lat, cidade.lon]}>
              <Popup>{cidade.nome}</Popup>
            </Marker>
            <Polygon positions={polygon} pathOptions={{ color: 'red' }} />
          </>
        )}
      </MapContainer>
      {cidade && (
        <Painel>
          <b>Irradiação</b><br />
          Anual: {cidade.anual}<br />
          Jan: {cidade.jan}<br />
          Fev: {cidade.fev}<br />
          Mar: {cidade.mar}<br />
          Abr: {cidade.abr}<br />
          Mai: {cidade.mai}<br />
          Jun: {cidade.jun}<br />
          Jul: {cidade.jul}<br />
          Ago: {cidade.ago}<br />
          Set: {cidade.set}<br />
          Out: {cidade.out}<br />
          Nov: {cidade.nov}<br />
          Dez: {cidade.dez}
        </Painel>
      )}
    </MapaWrapper>
  );
};

export default Mapa;
