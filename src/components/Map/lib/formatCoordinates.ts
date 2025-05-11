import { toLonLat } from "ol/proj";

export const formatCoordinates = (mercatorCoords: [number, number]) => {
  const [lon, lat] = toLonLat(mercatorCoords);
  return `${lat.toFixed(6)}, ${lon.toFixed(6)}`;
};
