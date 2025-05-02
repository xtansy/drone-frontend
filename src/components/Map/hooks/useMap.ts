import { useEffect, useState } from "react";
import { Feature, Map, View } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { defaults as defaultInteractions, DragRotate } from "ol/interaction.js";
import { apply } from "ol-mapbox-style";

import {
  MAP_TARGET_ID,
  VGU_COORDINATES,
  VECTOR_LAYER_STYLE,
  MAIN_POINT_STYLE,
} from "../lib";
import { Circle, Point } from "ol/geom";

const MAP_TILES_API_URL =
  "https://api.maptiler.com/maps/019690d8-2965-7306-b308-5ed6041f45be/style.json?key=aIIH2TLTQGTuteAf6oBb";

export const useMap = () => {
  const [map, setMap] = useState<Map | null>(null);
  const [vectorLayer, setVectorLayer] = useState<VectorLayer | null>(null);

  useEffect(() => {
    const initialMap = new Map({
      target: MAP_TARGET_ID,
      // layers: [
      //   new TileLayer({
      //     source: new OSM(),
      //   }),
      // ],
      view: new View({
        zoom: 17,
        center: VGU_COORDINATES,
      }),
      controls: [],
      interactions: defaultInteractions().extend([new DragRotate()]),
    });

    apply(initialMap, MAP_TILES_API_URL);

    const vectorLayerInitial = new VectorLayer({
      source: new VectorSource(),
      style: VECTOR_LAYER_STYLE,
      zIndex: 1,
    });

    initialMap.addLayer(vectorLayerInitial);
    setVectorLayer(vectorLayerInitial);
    setMap(initialMap);

    // Создаем особенную главную точку
    const mainPoint = new Point([4_364_390, 6_738_297]);
    const mainPointFeature = new Feature(mainPoint);
    mainPointFeature.setStyle(MAIN_POINT_STYLE);

    // Добавляем пульсирующую анимацию
    const start = Date.now();
    const animatePulse = () => {
      const elapsed = Date.now() - start;
      const pulse = 20 + Math.sin(elapsed / 800) * 5;

      const glowStyle = MAIN_POINT_STYLE[0];
      const image = glowStyle.getImage() as unknown as Circle;
      image.setRadius(pulse);

      mainPointFeature.setStyle(MAIN_POINT_STYLE); // повторное применение обновлённого стиля
      requestAnimationFrame(animatePulse);
    };
    animatePulse();

    vectorLayerInitial.getSource()?.addFeature(mainPointFeature);

    return () => {
      initialMap.setTarget(undefined);
      setMap(null);
      setVectorLayer(null);
    };
  }, []);

  return { map, vectorLayer };
};
