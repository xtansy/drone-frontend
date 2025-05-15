import "ol/ol.css";
import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { Polygon } from "ol/geom";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import { apply } from "ol-mapbox-style";
import { defaults as defaultControls } from "ol/control";

import { type PolygonModel } from "../../../../shared/types";
import { MAP_TILES_API_URL } from "../../lib";

interface MiniMapProps {
  polygon: PolygonModel;
  width?: number;
  height?: number;
}

export const MiniMap = ({
  polygon,
  width = 300,
  height = 300,
}: MiniMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || !polygon.coordinates?.length) return;

    // Очистка предыдущей карты
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setTarget(undefined);
      mapInstanceRef.current = null;
    }

    const source = new VectorSource();

    // Создаем полигон
    const closedCoords = [...polygon.coordinates];
    const isClosed =
      closedCoords[0][0] === closedCoords[closedCoords.length - 1][0] &&
      closedCoords[0][1] === closedCoords[closedCoords.length - 1][1];
    if (!isClosed) closedCoords.push([...closedCoords[0]]);

    const polygonFeature = new Feature({
      geometry: new Polygon([closedCoords]),
    });
    source.addFeature(polygonFeature);

    // Добавляем точки
    polygon.points.forEach((point) => {
      const pointFeature = new Feature({
        geometry: new Point([point.latitude, point.longitude]),
      });
      source.addFeature(pointFeature);
    });

    // Добавляем организационную точку
    const orgFeature = new Feature({
      geometry: new Point([
        polygon.organizationPoint.latitude,
        polygon.organizationPoint.longitude,
      ]),
    });
    source.addFeature(orgFeature);

    const vectorLayer = new VectorLayer({
      source,
      zIndex: 1,
    });

    const view = new View({
      zoom: 16,
      center: [
        polygon.organizationPoint.latitude,
        polygon.organizationPoint.longitude,
      ],
    });

    const map = new Map({
      target: mapRef.current,
      layers: [vectorLayer],
      view,
      controls: defaultControls({
        zoom: true, // только кнопки zoom
        rotate: false, // без вращения
        attribution: false, // без аттрибуции
      }),
      interactions: [], // полностью без интерактивности
    });

    apply(map, MAP_TILES_API_URL);

    mapInstanceRef.current = map;

    return () => {
      map.setTarget(undefined);
    };
  }, [polygon]);

  return (
    <div
      ref={mapRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    />
  );
};
