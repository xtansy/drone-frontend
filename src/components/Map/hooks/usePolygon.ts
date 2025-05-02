// hooks/usePolygon.ts
import { useEffect, useState } from "react";
import { Polygon } from "ol/geom";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style } from "ol/style";
import { useRandomPointsInPolygon } from "./useRandomPointsInPolygon";
import { VGU_COORDINATES } from "../lib";

const generatePolygonCoordinates = (
  center: number[],
  size: number = 100,
  points: number = 10
) => {
  const coordinates = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * 2 * Math.PI;
    const radius = size * (0.8 + Math.random() * 2);
    const x = center[0] + radius * Math.cos(angle);
    const y = center[1] + radius * Math.sin(angle);
    coordinates.push([x, y]);
  }
  coordinates.push(coordinates[0].slice());
  return coordinates;
};

export const usePolygon = (vectorSource: VectorSource | null) => {
  const [polygonCoords, setPolygonCoords] = useState<number[][]>([]);

  useEffect(() => {
    if (!vectorSource) return;

    const coords = generatePolygonCoordinates(VGU_COORDINATES);
    setPolygonCoords(coords);

    const polygon = new Polygon([coords]);
    const feature = new Feature(polygon);

    const neonStyle = new Style({
      fill: new Fill({
        color: "rgba(17, 17, 51, 0.3)",
      }),
      stroke: new Stroke({
        color: "#00ffff",
        width: 2,
      }),
    });

    const glowStyle = new Style({
      stroke: new Stroke({
        color: "rgba(0, 191, 255, 0.1)",
        width: 12,
      }),
    });

    feature.setStyle([glowStyle, neonStyle]);
    vectorSource.addFeature(feature);

    return () => {
      vectorSource.clear();
    };
  }, [vectorSource]);

  // Используем хук для точек после создания полигона
  useRandomPointsInPolygon(vectorSource, polygonCoords);
};
