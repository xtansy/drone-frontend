import { useEffect } from "react";
import { Point } from "ol/geom";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import { Circle, Fill, Stroke, Style } from "ol/style";

export const useRandomPointsInPolygon = (
  vectorSource: VectorSource | null,
  polygonCoords: number[][],
  count: number = 20
) => {
  useEffect(() => {
    if (!vectorSource || !polygonCoords.length) return;

    // Функция для проверки, находится ли точка внутри полигона
    const pointInPolygon = (point: number[], vs: number[][]) => {
      const x = point[0],
        y = point[1];
      let inside = false;
      for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        const xi = vs[i][0],
          yi = vs[i][1];
        const xj = vs[j][0],
          yj = vs[j][1];

        const intersect =
          yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
      }
      return inside;
    };

    // Находим границы полигона
    const extent = polygonCoords.reduce(
      (acc, coord) => {
        return [
          Math.min(acc[0], coord[0]),
          Math.min(acc[1], coord[1]),
          Math.max(acc[2], coord[0]),
          Math.max(acc[3], coord[1]),
        ];
      },
      [Infinity, Infinity, -Infinity, -Infinity]
    );

    // Генерируем случайные точки внутри полигона
    const points = [];
    while (points.length < count) {
      const x = extent[0] + Math.random() * (extent[2] - extent[0]);
      const y = extent[1] + Math.random() * (extent[3] - extent[1]);

      if (pointInPolygon([x, y], polygonCoords)) {
        points.push([x, y]);
      }
    }

    // Стиль для точек с неоновым эффектом
    const pointStyle = new Style({
      image: new Circle({
        radius: 4,
        fill: new Fill({
          color: "rgba(0, 191, 255, 0.8)", // primary-color
        }),
        stroke: new Stroke({
          color: "rgba(0, 255, 255, 0.9)", // accent-color
          width: 2,
        }),
      }),
    });

    // Стиль свечения для точек
    const glowStyle = new Style({
      image: new Circle({
        radius: 7,
        stroke: new Stroke({
          color: "rgba(0, 191, 255, 0.3)", // glow-color
          width: 4,
        }),
      }),
    });

    // Добавляем точки на карту
    points.forEach((coord) => {
      const point = new Point(coord);
      const feature = new Feature(point);
      feature.setStyle([glowStyle, pointStyle]);
      vectorSource.addFeature(feature);
    });

    // return () => {
    //   vectorSource.clear();
    // };
  }, [vectorSource, polygonCoords, count]);
};
