// hooks/usePolygon.ts
import { useEffect } from "react";
import { Polygon } from "ol/geom";
import Feature from "ol/Feature";
import VectorLayer from "ol/layer/Vector";
import { Fill, Stroke, Style } from "ol/style";
import { VGU_COORDINATES } from "../lib";

const generatePolygonCoordinates = (
  center: number[],
  size: number = 100,
  points: number = 10
) => {
  const coordinates = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * 2 * Math.PI;
    const radius = size * (0.8 + Math.random() * 0.4); // Случайность с меньшим разбросом
    const x = center[0] + radius * Math.cos(angle);
    const y = center[1] + radius * Math.sin(angle);
    coordinates.push([x, y]);
  }
  // Замыкаем полигон
  coordinates.push(coordinates[0].slice());
  return coordinates;
};

export const usePolygon = (vectorLayer: VectorLayer | null) => {
  useEffect(() => {
    if (!vectorLayer) return;

    const polygonCoords = generatePolygonCoordinates(VGU_COORDINATES);
    const polygon = new Polygon([polygonCoords]);
    const feature = new Feature(polygon);

    // Неоновый стиль
    const neonStyle = new Style({
      fill: new Fill({
        color: "rgba(17, 17, 51, 0.3)", // card-bg-color с прозрачностью
      }),
      stroke: new Stroke({
        color: "#00ffff", // accent-color
        width: 2,
      }),
    });

    // Стиль свечения
    const glowStyle = new Style({
      stroke: new Stroke({
        color: "rgba(0, 191, 255, 0.4)", // glow-color с меньшей прозрачностью
        width: 12,
      }),
    });

    feature.setStyle([glowStyle, neonStyle]);
    const source = vectorLayer.getSource();
    source?.addFeature(feature);

    return () => {
      source?.removeFeature(feature);
    };
  }, [vectorLayer]);
};
